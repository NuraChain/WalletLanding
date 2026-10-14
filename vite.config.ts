import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import type {} from 'vite-react-ssg'

import { localeRedirect } from './plugins/locale-redirect.ts'
import { compilePost, markdown } from './plugins/markdown.ts'
import {
  DEFAULT_LOCALE,
  type Locale,
  type LocaleCode,
  localePath,
  locales,
} from './src/i18n/locales.ts'
import { ORIGIN_PLACEHOLDER, siteConfig } from './src/site.config.ts'

/** Dev and preview both listen on this port. */
const DEV_PORT = 4100

const BLOG_DIR = 'src/content/blog'
const PAGES_DIR = 'src/content/pages'

/** Crawlers granted explicit access. The `*` rule already allows them; naming
 *  them is what opts back in for the AI agents that treat silence as a no. */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'meta-externalagent',
  'Amazonbot',
  'Bytespider',
  'cohere-ai',
]

/** One URL in the sitemap: where it is, when it changed, and its translations. */
type SitemapEntry = {
  path: string
  lastmod: string
  /** `[hreflang, path]`, only for languages this page actually exists in. */
  alternates: [string, string][]
  priority: string
}

/**
 * A content directory - the blog or the text pages - read off the disk:
 * `<slug>/<lang>.md`. The app reads the same layout through `import.meta.glob`
 * (src/blog/posts.ts, src/pages.ts) - the directory is the single source of
 * truth, so the two cannot drift apart, and the sitemap needs no list to
 * maintain.
 */
function readContent(dir: string): { slug: string; locale: LocaleCode; date: string }[] {
  if (!existsSync(dir)) return []

  const codes = new Set<string>(locales.map((locale) => locale.code))

  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) =>
      readdirSync(join(dir, entry.name))
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
          const code = file.slice(0, -3)
          if (!codes.has(code)) throw new Error(`${entry.name}: unknown language "${code}"`)
          const id = join(dir, entry.name, file)
          return {
            slug: entry.name,
            locale: code as LocaleCode,
            date: compilePost(readFileSync(id, 'utf8'), id).meta.date,
          }
        }),
    )
}

/** Every URL the build writes, in the order the sitemap lists them. */
function sitemapEntries(buildDate: string): SitemapEntry[] {
  const blog = readContent(BLOG_DIR)
  const pages = readContent(PAGES_DIR)
  const newest = (posts: { date: string }[]) =>
    posts.map((post) => post.date).sort((a, b) => (a < b ? 1 : -1))[0] ?? buildDate

  const defaultTag = locales.find((locale) => locale.code === DEFAULT_LOCALE)?.tag
  /** x-default points at the English URL of the same page, where there is one. */
  const withDefault = (paths: [string, string][]): [string, string][] => {
    const fallback = paths.find(([hreflang]) => hreflang === defaultTag)
    return fallback ? [...paths, ['x-default', fallback[1]]] : paths
  }

  const languages = locales.filter((locale) => blog.some((post) => post.locale === locale.code))

  const homeAlternates = withDefault(
    locales.map((locale): [string, string] => [locale.tag, localePath(locale.code)]),
  )

  const entries: SitemapEntry[] = locales.map((locale) => ({
    path: localePath(locale.code),
    lastmod: buildDate,
    alternates: homeAlternates,
    priority: locale.code === DEFAULT_LOCALE ? '1.0' : '0.8',
  }))

  for (const locale of languages) {
    entries.push({
      path: `${localePath(locale.code)}blog/`,
      lastmod: newest(blog.filter((post) => post.locale === locale.code)),
      alternates: withDefault(
        languages.map((alt) => [alt.tag, `${localePath(alt.code)}blog/`] as [string, string]),
      ),
      priority: '0.7',
    })
  }

  /** A post or text page, with alternates for only the languages it exists in. */
  const translated = (items: typeof blog, prefix: string, priority: string) => {
    for (const item of items) {
      const translations = items.filter((other) => other.slug === item.slug)
      entries.push({
        path: `${localePath(item.locale)}${prefix}${item.slug}/`,
        lastmod: item.date,
        alternates: withDefault(
          translations.flatMap((other): [string, string][] => {
            const locale = locales.find((entry) => entry.code === other.locale)
            return locale
              ? [[locale.tag, `${localePath(other.locale)}${prefix}${other.slug}/`]]
              : []
          }),
        ),
        priority,
      })
    }
  }

  translated(blog, 'blog/', '0.6')
  translated(pages, '', '0.3')

  return entries
}

/**
 * One web app manifest per language, emitted beside that language's page:
 * /manifest.webmanifest for English, /fa/manifest.webmanifest for Persian.
 *
 * `display: 'browser'` is deliberate. This site is the datasheet for a native
 * wallet, not the wallet - an installed standalone window carrying the app's
 * icon and name while being a marketing page is exactly the confusion a
 * self-custody product must not create. The manifest is here for the name,
 * icon and colours that a share or an add-to-home-screen shows; making the
 * page installable is a one-word change here if that is ever wanted.
 *
 * Every URL in it is root-relative: manifest URLs resolve against the manifest
 * itself, so that costs nothing and keeps the files right on whatever host
 * serves them. `id` and `scope` are the site root in all ten, so the
 * ten files describe one site in ten languages rather than ten separate apps,
 * which is the same split the JSON-LD graph in Seo.tsx makes.
 *
 * The icons are files in public/, rendered from the master by scripts/icons.mjs.
 * The maskable one is its own entry and its own file: Android crops a maskable
 * icon to its launcher shape, so that file carries the artwork smaller, and
 * declaring the full-bleed ones maskable as well would get their sparkles cut
 * off. Without one, Android shrinks the icon onto a white plate.
 */
function manifest(locale: Locale): string {
  return `${JSON.stringify(
    {
      id: '/',
      name: siteConfig.name,
      short_name: siteConfig.name,
      lang: locale.tag,
      dir: locale.dir,
      start_url: localePath(locale.code),
      scope: '/',
      display: 'browser',
      background_color: siteConfig.themeColor,
      theme_color: siteConfig.themeColor,
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: siteConfig.icon, sizes: '512x512', type: 'image/png', purpose: 'any' },
        {
          src: '/icon-maskable-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    null,
    2,
  )}
`
}

/**
 * Emits robots.txt, sitemap.xml and the ten manifests at build time rather than
 * checking them into public/.
 *
 * robots.txt and sitemap.xml are generated so they carry the same origin the
 * meta tags do, from the one constant in site.config.ts; both formats require
 * absolute URLs, so neither can dodge the question by going relative. The
 * manifests are generated for a different reason - one per language, off the
 * same locale list every other per-language file comes from.
 */
function seoFiles(origin: string): Plugin {
  let isSsrBuild = false

  return {
    name: 'wallet-landing:seo-files',
    apply: 'build',

    configResolved(config) {
      isSsrBuild = Boolean(config.build.ssr)
    },

    generateBundle() {
      if (isSsrBuild) return

      const robots = [
        'User-agent: *',
        'Allow: /',
        '',
        '# Answer engines and AI assistants',
        ...AI_CRAWLERS.flatMap((agent) => [`User-agent: ${agent}`, 'Allow: /', '']),
        `Sitemap: ${origin}/sitemap.xml`,
        '',
      ].join('\n')

      const buildDate = new Date().toISOString().slice(0, 10)
      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
        ...sitemapEntries(buildDate).map((entry) =>
          [
            '  <url>',
            `    <loc>${origin}${entry.path}</loc>`,
            ...entry.alternates.map(
              ([hreflang, path]) =>
                `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${origin}${path}" />`,
            ),
            `    <lastmod>${entry.lastmod}</lastmod>`,
            `    <priority>${entry.priority}</priority>`,
            '  </url>',
          ].join('\n'),
        ),
        '</urlset>',
        '',
      ].join('\n')

      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })

      for (const locale of locales) {
        this.emitFile({
          type: 'asset',
          // localePath is '/' or '/fa/'; emitted names are relative to dist/.
          fileName: `${localePath(locale.code).slice(1)}manifest.webmanifest`,
          source: manifest(locale),
        })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [markdown(), react(), tailwindcss(), localeRedirect(), seoFiles(ORIGIN_PLACEHOLDER)],

  server: { port: DEV_PORT, strictPort: true },
  preview: { port: DEV_PORT, strictPort: true },

  // vite-react-ssg: prerender the app to static HTML so crawlers that don't
  // run JavaScript still receive the full page. The route list comes from
  // `includedRoutes` in src/main.tsx (one page per language, plus text pages and the blog).
  ssgOptions: {
    entry: 'src/main.tsx',
    dirStyle: 'nested',
    // Inline the CSS the first viewport needs; defer the rest. Helps LCP.
    beastiesOptions: { preload: 'swap' },
  },
})
