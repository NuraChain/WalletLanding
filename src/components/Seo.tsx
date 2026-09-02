import { Head } from 'vite-react-ssg/single-page'

import { useLocale } from '../i18n/context'
import { DEFAULT_LOCALE, localePath, locales } from '../i18n/locales'
import { pathIn, pathOf } from '../route'
import { absoluteUrl, siteConfig } from '../site.config'

const GOOGLE_FONTS = 'https://fonts.googleapis.com/css2?'

type SeoProps = {
  title: string
  description: string
  /** `article` on a post; everything else is a `website`. */
  type?: 'website' | 'article'
  /** ISO date, on posts only. */
  published?: string
  /**
   * Nodes appended to the shared entity graph - Blog, BlogPosting,
   * BreadcrumbList. They link back to the site nodes below by `@id`.
   */
  graph?: readonly object[]
}

/**
 * Renders the content-bearing <head> tags for the current page and language.
 * vite-react-ssg serializes these into the static HTML at build time, so they
 * are present without JavaScript - including `lang` and `dir` on <html>.
 *
 * Structural tags that never change (charset, viewport, favicon, the base
 * fonts) live in index.html instead.
 *
 * hreflang comes from the route, not from the language list: a post that has
 * not been translated has no URL in that language, so it must not be claimed
 * as an alternate.
 */
export function Seo({ title, description, type = 'website', published, graph = [] }: SeoProps) {
  const { locale, route } = useLocale()

  const canonical = absoluteUrl(pathOf(route))
  const ogImage = absoluteUrl(siteConfig.ogImage)
  // Only platforms that have a build - this is a claim about the product.
  const operatingSystem = siteConfig.platforms
    .filter((platform) => platform.href)
    .map((platform) => platform.os)
    .join(', ')
  /** Every language the same page exists in, for the site-wide nodes below. */
  const languages = locales.map((alt) => alt.tag)
  /** Where else this project is itself, not merely linked from. */
  const profiles = [
    siteConfig.repository,
    ...siteConfig.platforms.flatMap((platform) => (platform.store ? [platform.store.href] : [])),
  ]

  const alternates = locales.flatMap((alt) => {
    const path = pathIn(route, alt.code)
    return path ? [{ ...alt, path }] : []
  })
  const defaultPath = pathIn(route, DEFAULT_LOCALE) ?? localePath(DEFAULT_LOCALE)

  /**
   * One entity graph, shared `@id`s, and the split that keeps it consistent:
   * Organization, SoftwareApplication and WebSite describe the site and are
   * identical on every page, so they carry the site root as `url` and list
   * every language. Only WebPage is per-page - it is the node that owns this
   * URL's language, title and image. A consumer merging the pages then sees
   * one app in ten languages, not one app claiming ten conflicting URLs.
   */
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: absoluteUrl('/'),
        logo: absoluteUrl(siteConfig.icon),
        sameAs: profiles,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteConfig.url}/#app`,
        name: siteConfig.name,
        url: absoluteUrl('/'),
        applicationCategory: 'FinanceApplication',
        operatingSystem,
        downloadUrl: siteConfig.releases,
        license: 'https://opensource.org/licenses/MIT',
        codeRepository: siteConfig.repository,
        // Free, and stated as a price so the app result renders instead of
        // being dropped for a missing offer.
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        inLanguage: languages,
        publisher: { '@id': `${siteConfig.url}/#organization` },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: absoluteUrl('/'),
        inLanguage: languages,
        publisher: { '@id': `${siteConfig.url}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        inLanguage: locale.tag,
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        about: { '@id': `${siteConfig.url}/#app` },
        primaryImageOfPage: ogImage,
      },
      ...graph,
    ],
  }

  return (
    <Head>
      <html lang={locale.tag} dir={locale.dir} />
      {/* index.css keys font stacks, tracking and leading off this. */}
      <body data-script={locale.script} />

      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Default is index,follow; the rest lifts Google's caps on the image
          and snippet it may show, which is the whole point of the og image. */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href={canonical} />

      {alternates.map((alt) => (
        <link key={alt.code} rel="alternate" hrefLang={alt.tag} href={absoluteUrl(alt.path)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl(defaultPath)} />

      {/* Scripts the base Latin faces don't cover. Only the page that needs it pays. */}
      {locale.fontQuery ? (
        <link rel="stylesheet" href={`${GOOGLE_FONTS}${locale.fontQuery}&display=swap`} />
      ) : null}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={locale.ogLocale} />
      {alternates
        .filter((alt) => alt.code !== locale.code)
        .map((alt) => (
          <meta key={alt.code} property="og:locale:alternate" content={alt.ogLocale} />
        ))}
      {published ? <meta property="article:published_time" content={published} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      {siteConfig.twitterHandle ? (
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
      ) : null}

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Head>
  )
}
