// Renders the icon each platform asks for from the one master, public/favicon.png.
//
//   npm run icons
//
// A single 512px PNG is the right answer for nobody in particular. A browser
// asks for /favicon.ico whether or not a page names one; a tab wants 16 or 32
// pixels, and scaling 512 down to that on the fly is how the ring turns to
// mush; iOS wants 180; Android cuts its launcher shape out of the middle of
// the icon and, unless it is handed one drawn for that, shrinks the whole
// thing onto a white plate instead.
//
// The outputs are checked in, like og.png - run this again only when the master
// changes. It draws with Chromium because Playwright is already here for
// qa:visual; an image library would be a dependency for four files.
import { readFile, writeFile } from 'node:fs/promises'

import { chromium } from 'playwright'

const MASTER = 'public/favicon.png'

/**
 * The master's own ground, which is pure black - not the page's --color-paper.
 * The maskable icon is padded with it, and padding in the page colour would
 * show as a seam around the artwork.
 */
const GROUND = '#000000'

/**
 * `scale` is the artwork's size relative to the canvas.
 *
 * The maskable one is the only one that is not 1. Android guarantees to show a
 * centred circle 80% of the icon wide and may crop everything outside it. The
 * ring would fit as drawn, but the larger sparkle reaches 223px from the
 * centre of the 512px master and the circle's radius is 205, so the artwork is
 * drawn at 88% - 196px, with a little air left over.
 */
const PNGS = [
  { file: 'public/apple-touch-icon.png', size: 180, scale: 1 },
  { file: 'public/icon-192.png', size: 192, scale: 1 },
  { file: 'public/icon-maskable-512.png', size: 512, scale: 0.88 },
]

/**
 * The tab sizes, drawn 15% larger than the master's own framing. The mark fills
 * 70% of the master, which suits a home screen; at 16px that leaves the ring
 * eleven pixels to be drawn in. Nothing is cropped by it - the sparkles still
 * land inside the square.
 */
const ICO = { file: 'public/favicon.ico', sizes: [16, 32, 48], scale: 1.15 }

/**
 * Draws every job in one page and returns the PNGs.
 *
 * The master is halved in steps on the way down rather than resampled once: a
 * single draw from 512 to 16 reads a fraction of the source pixels, and thin
 * strokes like the ring come out broken.
 */
async function render(page, master, targets) {
  const encoded = await page.evaluate(
    async ({ src, jobs, ground }) => {
      const image = new Image()
      image.src = src
      await image.decode()

      return jobs.map(({ size, scale }) => {
        const drawn = size * scale
        let source = image
        let width = image.width

        while (width / 2 >= drawn) {
          width /= 2
          const half = document.createElement('canvas')
          half.width = half.height = width
          const context = half.getContext('2d')
          context.imageSmoothingQuality = 'high'
          context.drawImage(source, 0, 0, width, width)
          source = half
        }

        const canvas = document.createElement('canvas')
        canvas.width = canvas.height = size
        const context = canvas.getContext('2d')
        context.fillStyle = ground
        context.fillRect(0, 0, size, size)
        context.imageSmoothingQuality = 'high'
        const offset = (size - drawn) / 2
        context.drawImage(source, offset, offset, drawn, drawn)

        return canvas.toDataURL('image/png').split(',')[1]
      })
    },
    { src: `data:image/png;base64,${master.toString('base64')}`, jobs: targets, ground: GROUND },
  )

  return encoded.map((png) => Buffer.from(png, 'base64'))
}

/**
 * Packs PNGs into an .ico: a 6-byte header, one 16-byte directory entry per
 * image, then the images themselves. PNG entries rather than bitmaps - every
 * browser reads them, and it is what the wallet's own icon.ico carries.
 */
function ico(images) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(images.length, 4)

  let offset = header.length + 16 * images.length
  const entries = images.map(({ size, png }) => {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size, 0) // width
    entry.writeUInt8(size, 1) // height
    entry.writeUInt16LE(1, 4) // colour planes
    entry.writeUInt16LE(32, 6) // bits per pixel
    entry.writeUInt32LE(png.length, 8)
    entry.writeUInt32LE(offset, 12)
    offset += png.length
    return entry
  })

  return Buffer.concat([header, ...entries, ...images.map(({ png }) => png)])
}

const master = await readFile(MASTER)
const browser = await chromium.launch()

try {
  const page = await browser.newPage()
  const tabJobs = ICO.sizes.map((size) => ({ size, scale: ICO.scale }))
  const rendered = await render(page, master, [...PNGS, ...tabJobs])

  const files = PNGS.map(({ file }, index) => ({ file, data: rendered[index] }))
  files.push({
    file: ICO.file,
    data: ico(ICO.sizes.map((size, index) => ({ size, png: rendered[PNGS.length + index] }))),
  })

  for (const { file, data } of files) {
    await writeFile(file, data)
    console.log(`${file}  ${data.length} bytes`)
  }
} finally {
  await browser.close()
}
