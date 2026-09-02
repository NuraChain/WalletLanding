/**
 * The catalogue, read off the filesystem: `src/content/blog/<slug>/<lang>.md`.
 *
 * There is no index to maintain and no admin panel - adding a file adds a
 * page, and `includedRoutes` in main.tsx prerenders it. A post exists in a
 * language only if that language's file exists, which is also what decides the
 * hreflang set, so an untranslated post is simply absent rather than served as
 * English under a Persian URL.
 *
 * Two globs, on purpose:
 *
 * - `meta` is small (title, date, tags) and every page's index needs it, so it
 *   is eager and shipped.
 * - `html` is the whole post. Both flags in the condition are replaced by
 *   constants at build time, so only the production browser bundle takes the
 *   empty branch and has the bodies tree-shaken out of it; there they come
 *   back off the prerendered DOM instead (PostBody.tsx). `npm run dev` does
 *   not prerender, so it keeps them.
 */
import { type LocaleCode, locales } from '../i18n/locales'
import type { Post, PostMetadata } from './types'

/** `…/blog/<slug>/<lang>.md` */
const FILE = /\/blog\/([^/]+)\/([^/]+)\.md$/

const metaModules = import.meta.glob<PostMetadata>('../content/blog/*/*.md', {
  eager: true,
  import: 'meta',
})

const bodyModules: Record<string, string> =
  import.meta.env.SSR || import.meta.env.DEV
    ? import.meta.glob<string>('../content/blog/*/*.md', { eager: true, import: 'html' })
    : {}

const codes = new Set<string>(locales.map((locale) => locale.code))

function parseId(id: string): { slug: string; locale: LocaleCode } {
  const match = FILE.exec(id)
  if (!match) throw new Error(`Post outside content/blog/<slug>/<lang>.md: ${id}`)

  const [, slug, code] = match
  if (!codes.has(code)) throw new Error(`Post ${slug} is in unknown language "${code}"`)
  return { slug, locale: code as LocaleCode }
}

/** Newest first - the order the index and the sitemap both use. */
export const posts: readonly Post[] = Object.entries(metaModules)
  .map(([id, meta]) => ({ ...meta, ...parseId(id) }))
  .sort((a, b) => (a.date < b.date ? 1 : -1))

/** Every language a given post was actually written in. Drives hreflang. */
export function postLocales(slug: string): LocaleCode[] {
  return posts.filter((post) => post.slug === slug).map((post) => post.locale)
}

export function postsIn(locale: LocaleCode): Post[] {
  return posts.filter((post) => post.locale === locale)
}

export function findPost(locale: LocaleCode, slug: string): Post | undefined {
  return posts.find((post) => post.locale === locale && post.slug === slug)
}

/** True where the language has at least one post, so the link is never dead. */
export function hasBlog(locale: LocaleCode): boolean {
  return posts.some((post) => post.locale === locale)
}

/**
 * The rendered body, during the prerender only. Empty in the browser by
 * design: PostBody reads the markup the prerender left in the DOM.
 */
export function postBody(locale: LocaleCode, slug: string): string {
  return bodyModules[`../content/blog/${slug}/${locale}.md`] ?? ''
}
