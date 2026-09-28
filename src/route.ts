/**
 * Which page a URL is, in which language.
 *
 * Still no router: every one of these paths is a directory of static HTML that
 * the prerender wrote, and moving between them is a real navigation. This
 * module is just the shared agreement about what the paths are - main.tsx uses
 * it to pick the component per route, and the header, footer and language menu
 * use it to link to the equivalent page rather than always to the home page.
 */
import { findPost, hasBlog, postsIn } from './blog/posts'
import { type Locale, type LocaleCode, localePath, locales } from './i18n/locales'
import { findPage, pagesIn } from './pages'

export type Route =
  | { kind: 'home'; locale: Locale }
  | { kind: 'blog'; locale: Locale }
  | { kind: 'post'; locale: Locale; slug: string }
  /** Privacy policy, terms, support - see pages.ts. */
  | { kind: 'page'; locale: Locale; slug: string }

const BLOG = 'blog'

export function blogPath(code: LocaleCode): string {
  return `${localePath(code)}${BLOG}/`
}

export function postPath(code: LocaleCode, slug: string): string {
  return `${blogPath(code)}${slug}/`
}

export function pagePath(code: LocaleCode, slug: string): string {
  return `${localePath(code)}${slug}/`
}

/** The path this route is served from. */
export function pathOf(route: Route): string {
  switch (route.kind) {
    case 'home':
      return localePath(route.locale.code)
    case 'blog':
      return blogPath(route.locale.code)
    case 'post':
      return postPath(route.locale.code, route.slug)
    case 'page':
      return pagePath(route.locale.code, route.slug)
  }
}

/**
 * The same page in another language, or null where it does not exist there -
 * an untranslated post has no Persian URL, so it gets no Persian hreflang and
 * the switcher sends you to that language's blog index instead.
 */
export function pathIn(route: Route, code: LocaleCode): string | null {
  switch (route.kind) {
    case 'home':
      return localePath(code)
    case 'blog':
      return hasBlog(code) ? blogPath(code) : null
    case 'post':
      return findPost(code, route.slug) ? postPath(code, route.slug) : null
    case 'page':
      return findPage(code, route.slug) ? pagePath(code, route.slug) : null
  }
}

/** Where the language switcher points when this page has no translation. */
export function fallbackPathIn(route: Route, code: LocaleCode): string {
  const blog = route.kind === 'blog' || route.kind === 'post'
  return pathIn(route, code) ?? (blog ? blogPath(code) : localePath(code))
}

/**
 * Reads a URL path. Unknown paths fall back to the home page of whatever
 * language prefix they carried, which is what the client does on a URL the
 * prerender never wrote.
 */
export function routeFromPath(pathname: string): Route {
  const segments = pathname.split('/').filter(Boolean)
  const locale = locales.find((item) => item.code === segments[0])
  const rest = locale ? segments.slice(1) : segments
  const current = locale ?? locales[0]

  if (rest[0] !== BLOG) {
    return rest.length === 1 && findPage(current.code, rest[0])
      ? { kind: 'page', locale: current, slug: rest[0] }
      : { kind: 'home', locale: current }
  }
  if (rest.length === 1 || !findPost(current.code, rest[1]))
    return { kind: 'blog', locale: current }
  return { kind: 'post', locale: current, slug: rest[1] }
}

/**
 * Every path the build writes: for each language its home page and text pages,
 * then, where it has posts, its blog index and one page per post. `includedRoutes` in
 * main.tsx returns this, and vite.config.ts derives the same set from the
 * content directory for the sitemap.
 */
export function allRoutes(): string[] {
  const paths: string[] = []
  for (const locale of locales) {
    paths.push(localePath(locale.code))
    for (const page of pagesIn(locale.code)) paths.push(pagePath(locale.code, page.slug))
    if (!hasBlog(locale.code)) continue
    paths.push(blogPath(locale.code))
    for (const post of postsIn(locale.code)) paths.push(postPath(locale.code, post.slug))
  }
  return paths
}
