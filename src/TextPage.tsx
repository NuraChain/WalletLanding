import { PostBody } from './components/PostBody'
import { Seo } from './components/Seo'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { content } from './i18n'
import { LocaleContext } from './i18n/context'
import type { Locale } from './i18n/locales'
import { findPage, pageBody } from './pages'
import { siteConfig } from './site.config'

/** A privacy policy, terms or support page, at `/<slug>/` or `/<lang>/<slug>/`. */
export default function TextPage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = content[locale.code]
  const page = findPage(locale.code, slug)
  if (!page) throw new Error(`No page "${slug}" in ${locale.code}`)

  return (
    <LocaleContext value={{ locale, t, route: { kind: 'page', locale, slug } }}>
      <Seo title={`${page.title} — ${siteConfig.name}`} description={page.description} />
      <SiteHeader />

      <main>
        <article>
          <header className="mx-auto max-w-6xl px-6 pt-20 pb-12 md:pt-28">
            <h1 className="display max-w-3xl text-h2">{page.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-ink-2">{page.description}</p>
            <p className="mt-8 font-mono text-xs text-ink-2">
              {t.pages.updated} <time dateTime={page.date}>{page.date}</time>
            </p>
          </header>

          <div className="border-t border-rule">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <PostBody html={pageBody(locale.code, slug)} />
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </LocaleContext>
  )
}
