/**
 * Single source of truth for the site's identity.
 *
 * Copy and per-language metadata (title, description) live in src/i18n/; this
 * file holds what is the same in every language. `<Seo />` turns both into
 * <head> tags that are baked into the prerendered HTML.
 *
 * Product facts here are taken from the Nura Wallet README. Don't add security
 * claims that aren't in the source - this is the page people decide whether to
 * trust their keys to.
 */
const repository = 'https://github.com/NuraChain/Wallet'

/** The latest GitHub release: one page with every build attached. */
const releases = `${repository}/releases/latest`

export const siteConfig = {
  name: 'Nura Wallet',

  /** Canonical origin, no trailing slash. Set per environment in .env. */
  url: (import.meta.env.VITE_SITE_URL || 'http://localhost:5173').replace(/\/+$/, ''),

  /** The app icon. Favicon, header mark and JSON-LD logo all point here. */
  icon: '/favicon.png',

  /** TODO(design): 1200x630 social preview image, placed in public/. */
  ogImage: '/og.png',

  /** TODO(content): set to a handle once one exists. */
  twitterHandle: null as string | null,

  repository,
  releases,

  license: 'MIT',

  /**
   * Release targets, in page order. OS names are not translated. `href` is
   * where the build comes from - the latest GitHub release for the three that
   * exist - and null where there is no build yet, which the page says outright
   * instead of linking nowhere. `store` is an app-store listing, offered first
   * when there is one. `icon` names a mark in components/PlatformIcon.tsx.
   * TODO(deploy): macOS and iOS have no build yet; set `href` once they do.
   */
  platforms: [
    { os: 'Windows', kind: 'desktop', icon: 'windows', href: releases, store: null },
    { os: 'macOS', kind: 'desktop', icon: 'apple', href: null, store: null },
    { os: 'Linux', kind: 'desktop', icon: 'linux', href: releases, store: null },
    {
      os: 'Android',
      kind: 'mobile',
      icon: 'android',
      href: releases,
      store: {
        name: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=wallet.nurachain.net',
      },
    },
    { os: 'iOS', kind: 'mobile', icon: 'apple', href: null, store: null },
  ],
} as const

/** Resolves a site-relative path to an absolute URL for meta tags. */
export function absoluteUrl(path: string): string {
  return new URL(path, `${siteConfig.url}/`).href
}
