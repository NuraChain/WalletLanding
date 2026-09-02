import { hasBlog } from '../blog/posts'
import { useLocale } from '../i18n/context'
import { localePath } from '../i18n/locales'
import { blogPath } from '../route'
import { siteConfig } from '../site.config'
import { LanguageMenu } from './LanguageMenu'

export function SiteHeader() {
  const { locale, t, route } = useLocale()

  /**
   * Section links are anchors on the home page and full paths anywhere else -
   * a bare `#builds` on a post would scroll to nothing.
   */
  const home = localePath(locale.code)
  const anchor = (href: string) => (route.kind === 'home' ? href : `${home}${href}`)

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:gap-6">
        <a href={home} className="flex items-center gap-2.5">
          <img
            src={siteConfig.icon}
            alt=""
            width={24}
            height={24}
            className="size-6 rounded-full"
          />
          <span className="display text-base tracking-tight whitespace-nowrap sm:text-lg">
            Nura<span className="text-ink-2"> Wallet</span>
          </span>
        </a>

        <nav aria-label={t.header.nav}>
          <ul className="flex items-center gap-4 font-mono text-xs sm:gap-6">
            {t.nav.map((item) => (
              <li key={item.href} className="hidden sm:block">
                <a href={anchor(item.href)} className="text-ink-2 transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
            {hasBlog(locale.code) ? (
              <li className="hidden sm:block">
                <a
                  href={blogPath(locale.code)}
                  aria-current={route.kind === 'home' ? undefined : 'true'}
                  className={
                    route.kind === 'home'
                      ? 'text-ink-2 transition-colors hover:text-ink'
                      : 'text-ink'
                  }
                >
                  {t.blog.nav}
                </a>
              </li>
            ) : null}
            <li>
              <LanguageMenu />
            </li>
            <li>
              <a className="btn btn-primary py-2.5" href={anchor('#builds')}>
                {t.header.download}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <span className="sr-only">{t.header.licensed}</span>
    </header>
  )
}
