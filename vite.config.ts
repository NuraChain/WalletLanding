import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import type {} from 'vite-react-ssg'

import { DEFAULT_LOCALE, localePath, locales } from './src/i18n/locales.ts'

/** Dev and preview both listen here, so the localhost origin is one number. */
const DEV_PORT = 9500

/** Routes prerendered to static HTML and listed in the sitemap: one per language. */
const ROUTES = locales.map((locale) => localePath(locale.code))

/** The hreflang set every page carries, so search engines pair the translations. */
const ALTERNATES: [hreflang: string, path: string][] = [
  ...locales.map((locale): [string, string] => [locale.tag, localePath(locale.code)]),
  ['x-default', localePath(DEFAULT_LOCALE)],
]

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

      const lastmod = new Date().toISOString().slice(0, 10)
      const alternates = ALTERNATES.map(
        ([hreflang, path]) =>
          `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${origin}${path}" />`,
      )
      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
        ...ROUTES.map((route) =>
          [
            '  <url>',
            `    <loc>${origin}${route}</loc>`,
            ...alternates,
            `    <lastmod>${lastmod}</lastmod>`,
            '    <changefreq>weekly</changefreq>',
            `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>`,
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
    plugins: [react(), tailwindcss(), seoFiles(origin)],

    server: { port: DEV_PORT, strictPort: true },
    preview: { port: DEV_PORT, strictPort: true },

    // vite-react-ssg: prerender the app to static HTML so crawlers that don't
    // run JavaScript still receive the full page. The route list comes from
    // `includedRoutes` in src/main.tsx (one page per language).
    ssgOptions: {
      entry: 'src/main.tsx',
      dirStyle: 'nested',
      // Inline the CSS the first viewport needs; defer the rest. Helps LCP.
      beastiesOptions: { preload: 'swap' },
    },
  }
})
