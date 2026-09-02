// Serves the prerendered site from dist/, for the systemd unit to run.
//
//   npm run serve                 # 127.0.0.1:4100
//   PORT=8080 HOST=0.0.0.0 npm run serve
//
// No dependencies on purpose: production installs nothing, and a static file
// server for a site that is already static needs nothing. `vite preview` would
// also work but Vite says outright that it is not a production server, and it
// drags the whole dev toolchain onto the box to do it.
//
// Two things here exist because of what is in front of this process:
//
//   - It does not compress. nginx compresses, and nginx's sub_filter - which
//     rewrites the placeholder origin into the real domain - cannot rewrite a
//     body it did not decompress. A gzipping upstream would silently ship
//     origin.invalid to every crawler.
//   - It binds to loopback by default. The only thing that should reach it is
//     the proxy. Set HOST to change that deliberately.
import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { dirname, extname, join, normalize, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')

const PORT = Number(process.env.PORT ?? 4100)
const HOST = process.env.HOST ?? '127.0.0.1'

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'text/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json',
}

/**
 * Resolves a request path to a file inside dist/, or null.
 *
 * The build uses dirStyle: 'nested', so every page is `<path>/index.html` -
 * `/fa/blog/self-custody-explained/` included. `redirect` is how `/fa/blog`
 * becomes `/fa/blog/`: one canonical URL per page, which is the same thing the
 * canonical tag and the sitemap say.
 */
async function locate(pathname) {
  // normalize() collapses `..` before it can leave dist/; the prefix check is
  // what catches an encoded attempt that survives it.
  const relative = normalize(decodeURIComponent(pathname)).replace(/^[\\/]+/, '')
  const target = join(DIST, relative)

  if (target !== DIST && !target.startsWith(DIST + sep)) return null

  const found = await stat(target).catch(() => null)

  if (found?.isFile()) return { file: target }

  if (found?.isDirectory()) {
    if (!pathname.endsWith('/')) return { redirect: `${pathname}/` }

    const index = join(target, 'index.html')
    const page = await stat(index).catch(() => null)

    if (page?.isFile()) return { file: index }
  }

  return null
}

/**
 * Assets are content-hashed, so the name changes when the bytes do and they can
 * be cached forever. Everything else is rewritten on the way out by nginx and
 * republished on every deploy, so it is revalidated instead.
 */
function cacheControl(pathname) {
  return pathname.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'no-cache'
}

const server = createServer((request, response) => {
  const send = (status, body, headers = {}) => {
    response.writeHead(status, { 'content-type': TYPES['.txt'], ...headers })
    response.end(request.method === 'HEAD' ? undefined : body)
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return send(405, 'Method not allowed\n', { allow: 'GET, HEAD' })
  }

  const { pathname } = new URL(request.url, `http://${request.headers.host ?? 'localhost'}`)

  locate(pathname)
    .then((match) => {
      if (!match) return send(404, 'Not found\n')
      if (match.redirect) return send(308, '', { location: match.redirect })

      response.writeHead(200, {
        'content-type': TYPES[extname(match.file)] ?? 'application/octet-stream',
        'cache-control': cacheControl(pathname),
      })

      if (request.method === 'HEAD') return response.end()

      createReadStream(match.file)
        .on('error', () => response.destroy())
        .pipe(response)
    })
    .catch(() => send(500, 'Internal error\n'))
})

// systemd stops a unit with SIGTERM: finish what is in flight, then exit 0, so
// a restart during a deploy does not show up as a failure.
for (const signal of ['SIGTERM', 'SIGINT']) {
  process.on(signal, () => server.close(() => process.exit(0)))
}

stat(join(DIST, 'index.html'))
  .catch(() => {
    console.error(`error: ${DIST} has no index.html - run 'npm run build' first`)
    process.exit(1)
  })
  .then(() => {
    server.listen(PORT, HOST, () => console.log(`serving ${DIST} on http://${HOST}:${PORT}`))
  })
