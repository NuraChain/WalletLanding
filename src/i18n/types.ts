/**
 * Shape of one language's copy. Every locale file satisfies this, so adding
 * a string here is a typecheck failure until all ten languages have it.
 */
export type Item = { term: string; detail: string }
export type Group = { title: string; items: readonly Item[] }

export type Content = {
  meta: { title: string; description: string }
  header: { nav: string; download: string; language: string; licensed: string }
  nav: readonly { label: string; href: string }[]
  hero: {
    eyebrow: string
    headline: string
    body: string
    note: string
    download: string
    source: string
  }
  /** Labels on the illustrative device. The figures on it are shared. */
  device: { label: string; sealLabel: string; sealState: string }
  boundary: {
    eyebrow: string
    headline: string
    body: string
    tag: string
    stays: Group
    leaves: Group
  }
  seal: {
    eyebrow: string
    headline: string
    body: string
    steps: readonly { title: string; detail: string }[]
  }
  capabilities: {
    eyebrow: string
    headline: string
    items: readonly { title: string; detail: string }[]
  }
  platforms: {
    eyebrow: string
    headline: string
    desktop: string
    mobile: string
    unavailable: string
    downloadFor: (os: string) => string
  }
  source: { eyebrow: string; headline: string; body: string; cta: string }
  footer: { tagline: string; repository: string; license: string; languages: string }
  /**
   * The blog's own chrome. The posts themselves are markdown files under
   * src/content/blog/<slug>/<lang>.md, not strings here.
   */
  blog: {
    /** Label of the link to the blog, in the header and the footer. */
    nav: string
    title: string
    description: string
    eyebrow: string
    headline: string
    intro: string
    readMore: string
    readingTime: (minutes: number) => string
    published: string
    backToBlog: string
    more: string
  }
}
