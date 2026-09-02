import { createContext, useContext } from 'react'

import type { Locale } from './locales'
import type { Content } from './types'

export type LocaleValue = { locale: Locale; t: Content }

/** Provided once, at the root, by main.tsx. */
export const LocaleContext = createContext<LocaleValue | null>(null)

export function useLocale(): LocaleValue {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale() must be used inside <LocaleContext>')
  return value
}
