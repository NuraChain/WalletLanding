/**
 * The language this visitor has settled on, remembered across visits.
 *
 * There is still no client-side language state: the page you are on *is* the
 * language, and switching is a real navigation. This is only a memory of which
 * language was settled on, and it exists so the first-visit redirect in
 * plugins/locale-redirect.ts fires exactly once. After that, whatever URL you
 * ask for is the language you get - including `/`, which is how a reader whose
 * browser is Persian can still choose to read the English page.
 *
 * The key is written from two places: that script, with what it detected, and
 * `rememberLocale` here, with what the reader picked in the switcher. A choice
 * made by hand and a choice made for you are the same fact afterwards, so they
 * share one key.
 *
 * `localStorage` is reached through `globalThis` rather than as a bare global
 * for the same reason `location` is in site.config.ts: vite.config.ts type
 * checks this file - the plugin imports the key from here - without the DOM
 * lib, and there is no storage during the render pass either. That same shared
 * ownership is why the import below carries its extension, the way the ones in
 * vite.config.ts do: the node project resolves modules as nodenext.
 */
import type { LocaleCode } from './locales.ts'

/** localStorage key. Namespaced: the origin is the whole site. */
export const LOCALE_KEY = 'nura.locale'

/**
 * Records a language the reader chose themselves, so a later visit to `/`
 * leaves them where they put themselves.
 *
 * Storage can throw rather than merely be missing - Safari in private mode, a
 * browser set to block site data - so the access is guarded and failure is
 * silent. The worst case is that detection runs once more.
 */
export function rememberLocale(code: LocaleCode): void {
  try {
    const store = (globalThis as { localStorage?: { setItem(key: string, value: string): void } })
      .localStorage
    store?.setItem(LOCALE_KEY, code)
  } catch {
    // A reader who blocks storage simply gets detected again next time.
  }
}
