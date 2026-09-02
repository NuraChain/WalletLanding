import { useEffect, useRef } from 'react'

import { useLocale } from '../i18n/context'
import { locales } from '../i18n/locales'
import { fallbackPathIn, pathIn } from '../route'
import { Flag, FlagSprite } from './Flags'

/**
 * Language switcher. A <details> disclosure with plain links, so it is fully
 * present in the prerendered HTML and works with JavaScript off. The effect
 * below only adds light dismiss (outside click, Escape).
 *
 * Each language carries its flag, drawn from the inline sprite that
 * <FlagSprite /> renders once here. The flag is decoration: the language's
 * own name is the label.
 *
 * Each translation is its own directory, so switching is a real navigation -
 * to the same page in the other language, or, for a post that language does
 * not have, to its blog index rather than a URL that was never written.
 */
export function LanguageMenu() {
  const { locale, t, route } = useLocale()
  const ref = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const menu = ref.current
    if (!menu) return

    const onPointerDown = (event: PointerEvent) => {
      if (menu.open && !menu.contains(event.target as Node)) menu.open = false
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !menu.open) return
      menu.open = false
      menu.querySelector('summary')?.focus()
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <>
      <FlagSprite />
      <details ref={ref} className="lang">
        <summary>
          <Flag code={locale.flag} />
          <span className="sr-only">{t.header.language}: </span>
          <span>{locale.code.toUpperCase()}</span>
        </summary>

        <ul className="lang-panel">
          {locales.map((item) => (
            <li key={item.code}>
              <a
                href={fallbackPathIn(route, item.code)}
                hrefLang={pathIn(route, item.code) ? item.tag : undefined}
                lang={item.tag}
                aria-current={item.code === locale.code ? 'true' : undefined}
              >
                <span className="lang-name">
                  <Flag code={item.flag} />
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </details>
    </>
  )
}
