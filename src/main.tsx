import { StrictMode } from 'react'
import { ViteReactSSG } from 'vite-react-ssg/single-page'

import App from './App'
import { type Locale, localeFromPath, localePath, locales } from './i18n/locales'

import './index.css'

function page(locale: Locale) {
  return (
    <StrictMode>
      <App locale={locale} />
    </StrictMode>
  )
}

// Single-page mode: no router, and no react-router-dom in the bundle. One
// language per directory instead: `/` is English, `/fa/` is Persian, and so
// on (see `includedRoutes` below).
//
// In the browser the locale is read off the directory the page was served
// from. During the prerender there is no window, so the default goes in here
// and the callback swaps in the right page for each route before it renders.
const initialLocale = localeFromPath(typeof window === 'undefined' ? '/' : window.location.pathname)

export const createRoot = ViteReactSSG(page(initialLocale), (ctx) => {
  if (ctx.routePath) ctx.app = page(localeFromPath(ctx.routePath))
})

/** One prerendered page per language. `vite-react-ssg build` reads this export. */
export function includedRoutes() {
  return locales.map((locale) => localePath(locale.code))
}
