/**
 * First visit: open the site in the reader's own language.
 *
 * The page is prerendered static HTML, one directory per language, so there is
 * nothing to "set" - the language is the URL. Sending a reader to their
 * language therefore means replacing the URL, and doing it before anything is
 * painted, or they read a sentence of English and then have it yanked away.
 * That rules out doing this from the React entry: a module script is deferred,
 * so it runs after first paint. Hence a tiny synchronous script in <head>,
 * generated here from the locale list so that adding a language to
 * src/i18n/locales.ts is still the only edit adding a language needs.
 *
 * What it does, in order:
 *
 * - Only on `/`. Every language has a home page, so the target always exists,
 *   and a deep link is already a deliberate page in a deliberate language -
 *   somebody sent you that post, and search engines are given the right one by
 *   hreflang. Being moved off it would lose the page you asked for.
 * - Only once, ever. The key it reads is the same one the switcher writes
 *   (src/i18n/preference.ts), so a reader who picks English while their
 *   browser is Persian keeps English, and nobody is ever redirected twice.
 * - `navigator.languages` in order, matched on the primary subtag, so `fa-IR`
 *   is Persian and `zh-Hans-CN` is Chinese. English wins the moment it appears
 *   in the list, because English is a language this site has: someone whose
 *   preferences read `de, en, fr` wants English, not French.
 * - Anything unrecognised falls through to English, which is where they
 *   already are - the fallback is to do nothing at all.
 *
 * Crawlers are unaffected in practice: the ones that matter here don't run
 * JavaScript, and those that do ask for English and so stay. Every language
 * remains reachable through hreflang, the footer and the sitemap regardless.
 */
import type { Plugin } from 'vite'

import { DEFAULT_LOCALE, localePath, locales } from '../src/i18n/locales.ts'
import { LOCALE_KEY } from '../src/i18n/preference.ts'

/** The comment in index.html that this replaces. */
const MARKER = '<!--locale-redirect-->'

/**
 * ES5 on purpose, and no bundling: it runs standing alone, ahead of every
 * other script on the page, in whatever browser showed up.
 */
function script(): string {
  const targets = locales
    .filter((locale) => locale.code !== DEFAULT_LOCALE)
    .map((locale) => [locale.code, localePath(locale.code)])

  return `<script>
      (function () {
        try {
          var key = ${JSON.stringify(LOCALE_KEY)};
          var store = window.localStorage;
          if (window.location.pathname !== ${JSON.stringify(localePath(DEFAULT_LOCALE))}) return;
          if (store.getItem(key)) return;
          var pages = ${JSON.stringify(targets)};
          var prefs = navigator.languages || [navigator.language || ''];
          for (var i = 0; i < prefs.length; i++) {
            var code = String(prefs[i]).toLowerCase().split('-')[0];
            if (code === ${JSON.stringify(DEFAULT_LOCALE)}) break;
            for (var j = 0; j < pages.length; j++) {
              if (pages[j][0] !== code) continue;
              store.setItem(key, code);
              window.location.replace(pages[j][1]);
              return;
            }
          }
          store.setItem(key, ${JSON.stringify(DEFAULT_LOCALE)});
        } catch (e) {
          /* Storage blocked, or no navigator: stay on the page we were served. */
        }
      })();
    </script>`
}

/**
 * Replaces the marker rather than injecting a tag, because where this lands in
 * <head> is load-bearing: a synchronous script placed after a stylesheet waits
 * for that stylesheet before it runs, and the font CSS is a request to Google.
 * It has to sit above that link, and below <meta charset>.
 */
export function localeRedirect(): Plugin {
  return {
    name: 'wallet-landing:locale-redirect',

    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        if (!html.includes(MARKER)) throw new Error(`index.html: ${MARKER} is missing`)
        return html.replace(MARKER, script())
      },
    },
  }
}
