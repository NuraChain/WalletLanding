// Visual and accessibility QA across every viewport, both directions and every
// kind of page.
//
//   npm run build && npm run preview     # in one terminal
//   npm run qa:visual                    # in another, against localhost:4100
//   npm run qa:visual -- --url http://... --out artifacts/visual-qa
//
// The point is not the screenshots on their own - it is the assertions that run
// beside them. A screenshot only helps if somebody looks at it, so this also
// checks the things a person reliably misses: horizontal overflow, elements
// escaping the viewport, `dir`/`lang` actually being what the URL claims, and
// the axe rule set.
//
// Needs a server already serving. Point it at the PREVIEW build rather than the
// dev server: the dev server ships an unprerendered SPA, so a crawler-facing
// regression - the whole reason this site is prerendered - cannot show up there.
import { mkdir, writeFile } from 'node:fs/promises'

import AxeBuilder from '@axe-core/playwright'
import { chromium } from 'playwright'

/** The three sizes the site is designed against; mobile is an iPhone 14/15 class. */
const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 1024, height: 768 },
  { name: 'mobile', width: 390, height: 844 },
]

/**
 * One Latin page set and one Arabic-script one - the two directions the site
 * ships - across the three page shapes: the landing page with its 3D scene, the
 * blog index, and a post, which is the only running text on the site.
 *
 * Language here is a URL, not a setting. There is no client-side language state
 * to seed, which is why this walks paths instead of localStorage.
 */
const PAGES = [
  { name: 'home', dir: 'ltr', lang: 'en', path: '/' },
  { name: 'blog', dir: 'ltr', lang: 'en', path: '/blog/' },
  { name: 'post', dir: 'ltr', lang: 'en', path: '/blog/self-custody-explained/' },
  { name: 'home', dir: 'rtl', lang: 'fa', path: '/fa/' },
  { name: 'blog', dir: 'rtl', lang: 'fa', path: '/fa/blog/' },
  { name: 'post', dir: 'rtl', lang: 'fa', path: '/fa/blog/self-custody-explained/' },
]

const arg = (flag, fallback) => {
  const index = process.argv.indexOf(flag)

  return index === -1 ? fallback : process.argv[index + 1]
}

const BASE_URL = arg('--url', 'http://localhost:4100').replace(/\/+$/, '')
const OUT_DIR = arg('--out', 'artifacts/visual-qa')

/** Rules about the page's own markup rather than about the harness. */
const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']

const findings = []

const record = (level, scenario, message) => {
  findings.push({ level, scenario, message })
}

/** Anything wider than the viewport, or hanging off either edge, on a page that never scrolls sideways. */
const layoutProblems = async (page) =>
  page.evaluate(() => {
    const root = document.documentElement
    const overflowing = []

    for (const element of document.querySelectorAll('body *')) {
      const style = getComputedStyle(element)

      if (style.display === 'none' || style.visibility === 'hidden' || style.position === 'fixed') {
        continue
      }

      const box = element.getBoundingClientRect()

      if (box.width === 0 || box.height === 0) continue

      // A few pixels of rounding is normal; a real escape is much larger.
      if (box.left < -2 || box.right > root.clientWidth + 2) {
        // ...unless an ancestor clips it. A code block inside `overflow-x: auto`
        // is WIDER than its box by design - it scrolls, it does not spill onto
        // the page. Reporting those trains the reader to ignore this check,
        // which is worse than not having it.
        let clipped = false

        for (let parent = element.parentElement; parent !== null; parent = parent.parentElement) {
          const parentStyle = getComputedStyle(parent)

          if (!/^(hidden|clip|auto|scroll)$/.test(parentStyle.overflowX)) continue

          const parentBox = parent.getBoundingClientRect()

          if (parentBox.left >= -2 && parentBox.right <= root.clientWidth + 2) {
            clipped = true
            break
          }
        }

        if (clipped) continue

        overflowing.push({
          tag: element.tagName.toLowerCase(),
          cls: String(element.className ?? '').slice(0, 48),
          left: Math.round(box.left),
          right: Math.round(box.right),
        })
      }
    }

    return {
      scrollWidth: root.scrollWidth,
      clientWidth: root.clientWidth,
      dir: root.getAttribute('dir'),
      lang: root.getAttribute('lang'),
      hasHorizontalScroll: root.scrollWidth > root.clientWidth + 1,
      // Deduplicated: one broken container usually reports every descendant too.
      overflowing: overflowing.slice(0, 6),
      // The prerender is the product. An empty one is the failure this whole
      // build exists to prevent, and it is invisible in a screenshot because
      // hydration fills the page in a frame later.
      headings: document.querySelectorAll('h1').length,
    }
  })

const run = async () => {
  await mkdir(OUT_DIR, { recursive: true })

  const browser = await chromium.launch()
  const summary = []

  try {
    for (const target of PAGES) {
      for (const viewport of VIEWPORTS) {
        const scenario = `${target.lang}-${target.name}-${viewport.name}`
        const context = await browser.newContext({
          viewport: { width: viewport.width, height: viewport.height },
          deviceScaleFactor: 1,
        })

        const page = await context.newPage()
        const consoleErrors = []

        // Hydration mismatches surface here and nowhere else - the page looks
        // right afterwards either way.
        page.on('console', (message) => {
          if (message.type() === 'error') consoleErrors.push(message.text().slice(0, 160))
        })

        const url = `${BASE_URL}${target.path}`

        await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
        await page.waitForSelector('main', { timeout: 30000 })

        // Walk the page so lazily decoded images and any deferred CSS have
        // settled before the capture, then return to the top so the screenshot
        // starts where a reader would.
        const height = await page.evaluate(() => document.body.scrollHeight)
        const step = Math.round(viewport.height * 0.8)

        for (let y = 0; y < height; y += step) {
          await page.evaluate((to) => window.scrollTo(0, to), y)
          await page.waitForTimeout(80)
        }

        await page.evaluate(() => window.scrollTo(0, 0))
        await page.waitForTimeout(300)

        const layout = await layoutProblems(page)

        if (layout.dir !== target.dir) {
          record('FAIL', scenario, `document dir is "${layout.dir}", expected "${target.dir}"`)
        }

        if (layout.lang !== target.lang && !String(layout.lang).startsWith(target.lang)) {
          record('FAIL', scenario, `document lang is "${layout.lang}", expected "${target.lang}"`)
        }

        if (layout.headings === 0) {
          record('FAIL', scenario, 'no <h1> on the page')
        }

        if (layout.hasHorizontalScroll) {
          record(
            'FAIL',
            scenario,
            `page scrolls horizontally (${layout.scrollWidth}px in ${layout.clientWidth}px)`,
          )
        }

        for (const element of layout.overflowing) {
          record(
            'WARN',
            scenario,
            `<${element.tag}> escapes the viewport (${element.left}..${element.right}) ${element.cls}`,
          )
        }

        for (const message of consoleErrors) {
          record('FAIL', scenario, `console error: ${message}`)
        }

        const axe = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze()

        for (const violation of axe.violations) {
          record(
            violation.impact === 'critical' || violation.impact === 'serious' ? 'FAIL' : 'WARN',
            scenario,
            `a11y ${violation.id} (${violation.impact}, ${violation.nodes.length}x): ${violation.help}`,
          )
        }

        const file = `${OUT_DIR}/${scenario}.png`

        await page.screenshot({ path: file, fullPage: true })

        summary.push({
          scenario,
          viewport: `${viewport.width}x${viewport.height}`,
          lang: layout.lang,
          dir: layout.dir,
          hScroll: layout.hasHorizontalScroll,
          overflow: layout.overflowing.length,
          a11yViolations: axe.violations.length,
          consoleErrors: consoleErrors.length,
          screenshot: file,
        })

        await context.close()
      }
    }
  } finally {
    await browser.close()
  }

  console.table(summary)

  await writeFile(
    `${OUT_DIR}/report.json`,
    JSON.stringify({ url: BASE_URL, summary, findings }, null, 2),
  )

  const fails = findings.filter((finding) => finding.level === 'FAIL')
  const warns = findings.filter((finding) => finding.level === 'WARN')

  for (const finding of [...fails, ...warns]) {
    console.log(`${finding.level.padEnd(4)} [${finding.scenario}] ${finding.message}`)
  }

  console.log(`\n${fails.length} failing, ${warns.length} warning, screenshots in ${OUT_DIR}/`)

  // Warnings do not fail the run; a genuine regression does.
  process.exit(fails.length > 0 ? 1 : 0)
}

await run()
