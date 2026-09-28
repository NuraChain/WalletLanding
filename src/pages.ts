/**
 * The text pages - privacy policy, terms of use, support - read off the
 * filesystem: `src/content/pages/<slug>/<lang>.md`, compiled by the same
 * markdown plugin as the blog.
 *
 * The rules are the blog's (see blog/posts.ts): a page exists in a language
 * only if its file does, and the bodies are globbed only for the prerender and
 * dev, so the production browser bundle never carries them - PostBody reads
 * them back off the prerendered DOM.
 */
import type { PostMetadata } from './blog/types'
import { type LocaleCode, locales } from './i18n/locales'

/** One page in one language. The slug is shared across languages. */
export type Page = PostMetadata & { slug: string; locale: LocaleCode }

/** `…/pages/<slug>/<lang>.md` */
const FILE = /\/pages\/([^/]+)\/([^/]+)\.md$/

const metaModules = import.meta.glob<PostMetadata>('./content/pages/*/*.md', {
  eager: true,
  import: 'meta',
})

const bodyModules: Record<string, string> =
  import.meta.env.SSR || import.meta.env.DEV
    ? import.meta.glob<string>('./content/pages/*/*.md', { eager: true, import: 'html' })
    : {}

const codes = new Set<string>(locales.map((locale) => locale.code))

/** Alphabetical by slug - the order the footer lists them in. */
export const pages: readonly Page[] = Object.entries(metaModules)
  .map(([id, meta]) => {
    const match = FILE.exec(id)
    if (!match || !codes.has(match[2]))
      throw new Error(`Page outside pages/<slug>/<lang>.md: ${id}`)
    return { ...meta, slug: match[1], locale: match[2] as LocaleCode }
  })
  .sort((a, b) => (a.slug < b.slug ? -1 : 1))

export function pagesIn(locale: LocaleCode): Page[] {
  return pages.filter((page) => page.locale === locale)
}

export function findPage(locale: LocaleCode, slug: string): Page | undefined {
  return pages.find((page) => page.locale === locale && page.slug === slug)
}

/** The rendered body, during the prerender only - empty in the browser by design. */
export function pageBody(locale: LocaleCode, slug: string): string {
  return bodyModules[`./content/pages/${slug}/${locale}.md`] ?? ''
}
