/**
 * The JSON-LD nodes the blog adds to the shared graph in Seo.tsx.
 *
 * They only ever link to the site-wide nodes by `@id` - Organization is
 * declared once, in Seo.tsx, and referenced here - so the ten languages still
 * merge into one consistent entity graph.
 */

import type { Locale, LocaleCode } from '../i18n/locales'
import { localePath } from '../i18n/locales'
import type { Content } from '../i18n/types'
import { blogPath, postPath } from '../route'
import { absoluteUrl, siteConfig } from '../site.config'
import type { Post } from './types'

const organization = { '@id': `${siteConfig.url}/#organization` }

function blogId(code: LocaleCode): string {
  return `${absoluteUrl(blogPath(code))}#blog`
}

/** Home › Blog › (post). Rendered as a real breadcrumb on the page too. */
function breadcrumbs(locale: Locale, t: Content, post?: Post) {
  const trail = [
    { name: siteConfig.name, item: absoluteUrl(localePath(locale.code)) },
    { name: t.blog.nav, item: absoluteUrl(blogPath(locale.code)) },
    ...(post ? [{ name: post.title, item: absoluteUrl(postPath(locale.code, post.slug)) }] : []),
  ]

  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((step, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: step.name,
      item: step.item,
    })),
  }
}

export function blogGraph(locale: Locale, t: Content, posts: readonly Post[]): object[] {
  return [
    {
      '@type': 'Blog',
      '@id': blogId(locale.code),
      url: absoluteUrl(blogPath(locale.code)),
      name: t.blog.title,
      description: t.blog.description,
      inLanguage: locale.tag,
      publisher: organization,
      blogPost: posts.map((post) => ({
        '@type': 'BlogPosting',
        '@id': `${absoluteUrl(postPath(locale.code, post.slug))}#post`,
        headline: post.title,
        url: absoluteUrl(postPath(locale.code, post.slug)),
        datePublished: post.date,
      })),
    },
    breadcrumbs(locale, t),
  ]
}

export function postGraph(locale: Locale, t: Content, post: Post): object[] {
  const url = absoluteUrl(postPath(locale.code, post.slug))

  return [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#post`,
      url,
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: locale.tag,
      image: absoluteUrl(siteConfig.ogImage),
      keywords: post.tags.join(', '),
      wordCount: post.words,
      timeRequired: `PT${post.minutes}M`,
      isPartOf: { '@id': blogId(locale.code) },
      mainEntityOfPage: { '@id': `${url}#webpage` },
      author: organization,
      publisher: organization,
    },
    breadcrumbs(locale, t, post),
  ]
}
