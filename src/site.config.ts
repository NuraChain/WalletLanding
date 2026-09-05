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

/**
 * The origin every absolute URL on this site is written with - and deliberately
 * a placeholder, not the real domain. The site is served by nginx, and the host
 * it answers on is nginx's to know, so the build bakes in no domain: nginx
 * rewrites this string to the live origin on the way out - see the README.
 *
 * It is a reserved `.invalid` name on purpose. A server that was never
 * configured then fails visibly, instead of quietly pointing every canonical on
 * the site at somebody else's domain.
 *
 * vite.config.ts imports it for robots.txt and sitemap.xml, which is why
 * nothing in this file may touch Vite or browser globals at the top level.
 */
export const ORIGIN_PLACEHOLDER = 'https://nurawallet.app'

const repository = 'https://github.com/NuraChain/Wallet'

/** The latest GitHub release: one page with every build attached. */
const releases = `${repository}/releases/latest`

/**
 * A build, by its asset file name. `/releases/latest/download/` redirects to
 * that asset in whatever the newest release is, so nothing here is pinned to a
 * version - but the file names must stay stable from release to release, or
 * the link 404s.
 */
const download = (asset: string) => `${repository}/releases/latest/download/${asset}`

export const siteConfig = {
  name: 'Nura Wallet',

  /** The app icon. Favicon, header mark and JSON-LD logo all point here. */
  icon: '/favicon.png',

  /** 1200x630 social card. Rendered from design/og.html - see CLAUDE.md. */
  ogImage: '/og.png',

  /** TODO(content): set to a handle once one exists. */
  twitterHandle: null as string | null,

  repository,
  releases,

  license: 'MIT',

  /**
   * Release targets, in page order. OS names are not translated. `href` is the
   * build itself - a direct download of that asset from the latest release for
   * the three that exist - and null where there is no build yet, which the page
   * says outright instead of linking nowhere. `store` is an app-store listing,
   * offered first when there is one. `icon` names a mark in
   * components/PlatformIcon.tsx.
   * TODO(deploy): macOS and iOS have no build yet; set `href` once they do.
   */
  platforms: [
    {
      os: 'Windows',
      kind: 'desktop',
      icon: 'windows',
      href: download('Nura-Wallet-Windows-x64-setup.exe'),
      store: null,
    },
    { os: 'macOS', kind: 'desktop', icon: 'apple', href: null, store: null },
    {
      os: 'Linux',
      kind: 'desktop',
      icon: 'linux',
      href: download('Nura-Wallet-Linux-amd64.deb'),
      store: null,
    },
    {
      os: 'Android',
      kind: 'mobile',
      icon: 'android',
      href: download('Nura-Wallet-Android-universal.apk'),
      store: {
        name: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=wallet.nurachain.net',
      },
    },
    { os: 'iOS', kind: 'mobile', icon: 'apple', href: null, store: null },
  ],

  /**
   * Community accounts, in the order nurachain.net lists them. They are the
   * chain's accounts - the wallet keeps no separate ones - so these URLs are
   * the ones published there. `icon` names a mark in components/SocialIcon.tsx;
   * the names are brands and are never translated.
   */
  social: [
    { name: 'GitHub', icon: 'github', href: 'https://github.com/NuraChain' },
    { name: 'Telegram', icon: 'telegram', href: 'https://t.me/nurachain' },
    { name: 'X', icon: 'x', href: 'https://x.com/nurachainnet' },
    { name: 'Discord', icon: 'discord', href: 'https://discord.gg/8BMAXTdXQg' },
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/nura.chain/' },
  ],
} as const

/**
 * The origin to write into this render's URLs. In a browser it is the host
 * actually being served, whatever nginx answers as, so a JavaScript client is
 * right whether or not the rewrite is configured. During the prerender there is
 * no such host, so the placeholder goes in and nginx substitutes it later.
 *
 * `location` is read off `globalThis` rather than as a bare global because
 * vite.config.ts type-checks this file without the DOM lib - and because during
 * the render pass there is no DOM at all.
 */
function siteOrigin(): string {
  return (globalThis as { location?: { origin: string } }).location?.origin ?? ORIGIN_PLACEHOLDER
}

/** Resolves a site-relative path to an absolute URL for meta tags. */
export function absoluteUrl(path: string): string {
  return new URL(path, `${siteOrigin()}/`).href
}
