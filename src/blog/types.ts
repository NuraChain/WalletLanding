/**
 * Shape of a compiled post.
 *
 * Imported by the app *and* by plugins/markdown.ts, which produces these at
 * build time, so - like i18n/locales.ts - it must stay free of browser and
 * Vite globals. Types only.
 */
import type { LocaleCode } from '../i18n/locales.ts'

export type PostFrontmatter = {
  title: string
  description: string
  /** ISO date, `YYYY-MM-DD`. Formatted per locale where it is displayed. */
  date: string
  tags: string[]
}

export type PostMetadata = PostFrontmatter & {
  /** Words for spaced scripts, ideographs for Han. */
  words: number
  minutes: number
}

/** One post in one language. The slug is shared across languages. */
export type Post = PostMetadata & {
  slug: string
  locale: LocaleCode
}
