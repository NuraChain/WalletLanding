import { createContext, useContext } from 'react'

import type { Route } from '../route'
import type { Locale } from './locales'
import type { Content } from './types'

/**
 * The language *and* the page. The route is here because the header, footer
 * and language switcher all have to link relative to the page they are on: a
 * post's switcher points at the same post in the other language, and the
 * header's section anchors have to be absolute once you are off the home page.
 */
export type LocaleValue = { locale: Locale; t: Content; route: Route }

/** Provided once, at the root of each page. */
export const LocaleContext = createContext<LocaleValue | null>(null)

export function useLocale(): LocaleValue {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale() must be used inside <LocaleContext>')
  return value
}
