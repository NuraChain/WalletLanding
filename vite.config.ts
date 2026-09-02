import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import type {} from 'vite-react-ssg'

import { compilePost, markdown } from './plugins/markdown.ts'
import { DEFAULT_LOCALE, type LocaleCode, localePath, locales } from './src/i18n/locales.ts'

/** Dev and preview both listen here, so the localhost origin is one number. */
const DEV_PORT = 9500

const BLOG_DIR = 'src/content/blog'

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
 * The blog, read off the content directory: `<slug>/<lang>.md`. The app reads
 * the same layout through `import.meta.glob` (src/blog/posts.ts) - the
 * directory is the single source of truth, so the two cannot drift apart, and
 * the sitemap needs no list to maintain.
 */
function readBlog(): { slug: string; locale: LocaleCode; date: string }[] {
  if (!existsSync(BLOG_DIR)) return []

  const codes = new Set<string>(locales.map((locale) => locale.code))

  return readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) =>
      readdirSync(join(BLOG_DIR, entry.name))
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
          const code = file.slice(0, -3)
          if (!codes.has(code)) throw new Error(`${entry.name}: unknown language "${code}"`)
          const id = join(BLOG_DIR, entry.name, file)
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
  const blog = readBlog()
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

  for (const post of blog) {
    const translations = blog.filter((item) => item.slug === post.slug)
    entries.push({
      path: `${localePath(post.locale)}blog/${post.slug}/`,
      lastmod: post.date,
      alternates: withDefault(
        translations.flatMap((item): [string, string][] => {
          const locale = locales.find((entry) => entry.code === item.locale)
          return locale ? [[locale.tag, `${localePath(item.locale)}blog/${item.slug}/`]] : []
        }),
      ),
      priority: '0.6',
    })
  }

  return entries
}

/**
 * Emits robots.txt and sitemap.xml at build time instead of checking them into
 * public/, so the canonical origin lives only in VITE_SITE_URL and can't drift.
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
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const origin = (env.VITE_SITE_URL || `http://localhost:${DEV_PORT}`).replace(/\/+$/, '')

  return {
    plugins: [markdown(), react(), tailwindcss(), seoFiles(origin)],

    server: { port: DEV_PORT, strictPort: true },
    preview: { port: DEV_PORT, strictPort: true },

    // vite-react-ssg: prerender the app to static HTML so crawlers that don't
    // run JavaScript still receive the full page. The route list comes from
    // `includedRoutes` in src/main.tsx (one page per language, plus the blog).
    ssgOptions: {
      entry: 'src/main.tsx',
      dirStyle: 'nested',
      // Inline the CSS the first viewport needs; defer the rest. Helps LCP.
      beastiesOptions: { preload: 'swap' },
    },
  }
})
