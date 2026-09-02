import { hasBlog } from '../blog/posts'
import { useLocale } from '../i18n/context'
import { locales } from '../i18n/locales'
import { blogPath, fallbackPathIn, pathIn } from '../route'
import { siteConfig } from '../site.config'

export function SiteFooter() {
  const { locale, t, route } = useLocale()

  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 font-mono text-xs text-ink-2">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.tagline}</p>
          <p className="flex items-center gap-5">
            {hasBlog(locale.code) ? (
              <a className="transition-colors hover:text-ink" href={blogPath(locale.code)}>
                {t.blog.nav}
              </a>
            ) : null}
            <a
              className="transition-colors hover:text-ink"
              href={siteConfig.repository}
              rel="noreferrer"
            >
              {t.footer.repository}
            </a>
            <span>{t.footer.license}</span>
          </p>
        </div>

        {/* Plain links to every translation: crawlers and no-JS readers find them here. */}
        <nav aria-label={t.footer.languages}>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {locales.map((item) => (
              <li key={item.code}>
                <a
                  href={fallbackPathIn(route, item.code)}
                  hrefLang={pathIn(route, item.code) ? item.tag : undefined}
                  lang={item.tag}
                  aria-current={item.code === locale.code ? 'true' : undefined}
                  className={
                    item.code === locale.code ? 'text-ink' : 'transition-colors hover:text-ink'
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
