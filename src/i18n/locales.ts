/**
 * The languages the site ships in.
 *
 * Imported by the app *and* by vite.config.ts (for the prerender route list
 * and the sitemap), so it must stay free of browser and Vite globals.
 */
export type LocaleCode = 'en' | 'fa' | 'ar' | 'es' | 'pt' | 'hi' | 'zh' | 'ru' | 'fr' | 'tr'

/** Writing system. Decides the font stack, tracking and leading in index.css. */
export type Script = 'latin' | 'cyrillic' | 'arabic' | 'devanagari' | 'han'

/**
 * Flag shown beside a language in the switcher: ISO 3166-1 alpha-2, lower
 * case, matching a symbol in components/Flags.tsx. A language is not a
 * country, so this is a convention - the country `ogLocale` names, and Saudi
 * Arabia for Arabic, whose og locale names none.
 */
export type FlagCode = 'us' | 'ir' | 'sa' | 'es' | 'br' | 'in' | 'cn' | 'ru' | 'fr' | 'tr'

export type Locale = {
  code: LocaleCode
  /** BCP 47 tag, used for `<html lang>`, hreflang and JSON-LD `inLanguage`. */
  tag: string
  /** The language's own name for itself, shown in the switcher. */
  name: string
  dir: 'ltr' | 'rtl'
  ogLocale: string
  flag: FlagCode
  script: Script
  /**
   * Extra Google Fonts family for scripts the base Latin faces don't cover.
   * Linked per page from <Seo />, so the English page never pays for it.
   */
  fontQuery?: string
}

export const DEFAULT_LOCALE: LocaleCode = 'en'

const ARABIC_SCRIPT_FONT = 'family=Vazirmatn:wght@400..900'

export const locales: readonly Locale[] = [
  {
    code: 'en',
    tag: 'en',
    name: 'English',
    dir: 'ltr',
    ogLocale: 'en_US',
    flag: 'us',
    script: 'latin',
  },
  {
    code: 'fa',
    tag: 'fa',
    name: 'فارسی',
    dir: 'rtl',
    ogLocale: 'fa_IR',
    flag: 'ir',
    script: 'arabic',
    fontQuery: ARABIC_SCRIPT_FONT,
  },
  {
    code: 'ar',
    tag: 'ar',
    name: 'العربية',
    dir: 'rtl',
    ogLocale: 'ar_AR',
    flag: 'sa',
    script: 'arabic',
    fontQuery: ARABIC_SCRIPT_FONT,
  },
  {
    code: 'es',
    tag: 'es',
    name: 'Español',
    dir: 'ltr',
    ogLocale: 'es_ES',
    flag: 'es',
    script: 'latin',
  },
  {
    code: 'pt',
    tag: 'pt',
    name: 'Português',
    dir: 'ltr',
    ogLocale: 'pt_BR',
    flag: 'br',
    script: 'latin',
  },
  {
    code: 'hi',
    tag: 'hi',
    name: 'हिन्दी',
    dir: 'ltr',
    ogLocale: 'hi_IN',
    flag: 'in',
    script: 'devanagari',
    fontQuery: 'family=Noto+Sans+Devanagari:wght@400..900',
  },
  {
    code: 'zh',
    tag: 'zh-Hans',
    name: '中文',
    dir: 'ltr',
    ogLocale: 'zh_CN',
    flag: 'cn',
    script: 'han',
    fontQuery: 'family=Noto+Sans+SC:wght@400..900',
  },
  {
    code: 'ru',
    tag: 'ru',
    name: 'Русский',
    dir: 'ltr',
    ogLocale: 'ru_RU',
    flag: 'ru',
    script: 'cyrillic',
    fontQuery: 'family=Golos+Text:wght@400..900',
  },
  {
    code: 'fr',
    tag: 'fr',
    name: 'Français',
    dir: 'ltr',
    ogLocale: 'fr_FR',
    flag: 'fr',
    script: 'latin',
  },
  {
    code: 'tr',
    tag: 'tr',
    name: 'Türkçe',
    dir: 'ltr',
    ogLocale: 'tr_TR',
    flag: 'tr',
    script: 'latin',
  },
]

/** Site-relative path of a locale's page: `/` for the default, `/fa/` otherwise. */
export function localePath(code: LocaleCode): string {
  return code === DEFAULT_LOCALE ? '/' : `/${code}/`
}

/** The locale a URL path belongs to. Unknown prefixes fall back to the default. */
export function localeFromPath(pathname: string): Locale {
  const [first = ''] = pathname.split('/').filter(Boolean)
  return locales.find((locale) => locale.code === first) ?? locales[0]
}
