import { Head } from 'vite-react-ssg/single-page'

import { useLocale } from '../i18n/context'
import { DEFAULT_LOCALE, localePath, locales } from '../i18n/locales'
import { absoluteUrl, siteConfig } from '../site.config'

const GOOGLE_FONTS = 'https://fonts.googleapis.com/css2?'

/**
 * Renders the content-bearing <head> tags for the current language.
 * vite-react-ssg serializes these into the static HTML at build time, so they
 * are present without JavaScript - including `lang` and `dir` on <html>.
 *
 * Structural tags that never change (charset, viewport, favicon, the base
 * fonts) live in index.html instead.
 */
export function Seo() {
  const { locale, t } = useLocale()

  const canonical = absoluteUrl(localePath(locale.code))
  const ogImage = absoluteUrl(siteConfig.ogImage)
  // Only platforms that have a build - this is a claim about the product.
  const operatingSystem = siteConfig.platforms
    .filter((platform) => platform.href)
    .map((platform) => platform.os)
    .join(', ')

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: absoluteUrl('/'),
        description: t.meta.description,
        logo: absoluteUrl(siteConfig.icon),
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteConfig.url}/#app`,
        name: siteConfig.name,
        url: canonical,
        description: t.meta.description,
        applicationCategory: 'FinanceApplication',
        operatingSystem,
        downloadUrl: siteConfig.releases,
        license: 'https://opensource.org/licenses/MIT',
        codeRepository: siteConfig.repository,
        inLanguage: locale.tag,
        publisher: { '@id': `${siteConfig.url}/#organization` },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: canonical,
        description: t.meta.description,
        inLanguage: locale.tag,
        publisher: { '@id': `${siteConfig.url}/#organization` },
      },
    ],
  }

  return (
    <Head>
      <html lang={locale.tag} dir={locale.dir} />
      {/* index.css keys font stacks, tracking and leading off this. */}
      <body data-script={locale.script} />

      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <link rel="canonical" href={canonical} />

      {locales.map((alt) => (
        <link
          key={alt.code}
          rel="alternate"
          hrefLang={alt.tag}
          href={absoluteUrl(localePath(alt.code))}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl(localePath(DEFAULT_LOCALE))} />

      {/* Scripts the base Latin faces don't cover. Only the page that needs it pays. */}
      {locale.fontQuery ? (
        <link rel="stylesheet" href={`${GOOGLE_FONTS}${locale.fontQuery}&display=swap`} />
      ) : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={t.meta.title} />
      <meta property="og:description" content={t.meta.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale.ogLocale} />
      {locales
        .filter((alt) => alt.code !== locale.code)
        .map((alt) => (
          <meta key={alt.code} property="og:locale:alternate" content={alt.ogLocale} />
        ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t.meta.title} />
      <meta name="twitter:description" content={t.meta.description} />
      <meta name="twitter:image" content={ogImage} />
      {siteConfig.twitterHandle ? (
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
      ) : null}

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Head>
  )
}
