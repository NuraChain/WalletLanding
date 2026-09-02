# WalletLanding

Marketing landing page. Vite + React + Tailwind, prerendered to static HTML,
in ten languages.

## Commands

| Command                           | What it does                                                        |
| --------------------------------- | ------------------------------------------------------------------- |
| `npm run dev`                     | Vite dev server (plain SPA, no prerender; `/fa/` etc. work)         |
| `npm run build`                   | `tsc -b` then `vite-react-ssg build` → static HTML in `dist/`       |
| `npm run preview`                 | Serve `dist/` as it will be served in production                    |
| `npm run lint` / `lint:fix`       | oxlint                                                              |
| `npm run format` / `format:check` | oxfmt                                                               |
| `npm run typecheck`               | `tsc -b`                                                            |
| `npm run check`                   | typecheck + lint + format:check — run this before calling work done |

## Stack

- **Vite 8** + **React 19**, TypeScript, project-references tsconfig
  (`tsconfig.app.json` for `src/`, `tsconfig.node.json` for `vite.config.ts`
  plus `src/i18n/locales.ts`, which the config imports).
- **Tailwind CSS v4** via `@tailwindcss/vite`. There is no `tailwind.config.js` —
  v4 is CSS-first, so design tokens are declared in the `@theme` block of
  `src/index.css`. Adding `--color-foo` there is what makes `text-foo`,
  `bg-foo`, `border-foo` exist. Unused tokens are tree-shaken out of the build.
- **oxlint** + **oxfmt** (Oxc). oxfmt also sorts imports and Tailwind class
  lists, so don't hand-order either — run `npm run format`.
- **vite-react-ssg** in single-page mode, rendering one page per language
  (see "Languages"). No router.

## Prerendering — the part that is easy to break

The whole point of the SSG setup is that crawlers which don't execute
JavaScript still receive the full page. Google renders JS; GPTBot,
PerplexityBot and ClaudeBot largely do not. Verify with:

```sh
npm run build && grep -c "<h1" dist/index.html dist/fa/index.html   # each must be >= 1
```

Rules that follow from this:

- **Import from `vite-react-ssg/single-page`, never from `vite-react-ssg`.**
  The root entry pulls in `react-router-dom` at runtime, which is not installed.
- **No browser globals at module top level.** `window`, `document` and
  `localStorage` do not exist during the render pass. Put such access inside
  `useEffect`, or wrap the component in `<ClientOnly>` from
  `vite-react-ssg/single-page`. The one deliberate exception is the
  `typeof window` guard in `src/main.tsx` that picks the locale on the client.
- **Content that must be indexed cannot be behind an effect or a fetch.** If it
  isn't in the first render, it isn't in `dist/<lang>/index.html`.
- **Don't put `<title>` or `<meta name="description">` in `index.html`.** The
  injector prepends helmet output to `<head>` without removing what's already
  there, so you would ship two of each.
- **Never write the text `<html` in `index.html` before the root element, not
  even in a comment.** The injector adds `lang`/`dir` by replacing the first
  `<html` it finds. That is also why the root element carries no attributes:
  each page sets its own through `<Head>` in `Seo.tsx`.
- **`<Head>` serializes title, meta, link, script and `<html>`/`<body>`
  attributes — nothing else.** A `<style>` inside `<Head>` is silently dropped
  from the prerender.
- **beasties (critical CSS) cannot see attributes on `<html>` and skips
  `:lang()` selectors outright.** Anything that must be in the inlined
  first-paint CSS and varies per page has to key off `body[data-script=…]`,
  which is why that attribute exists. Bare `html {}` and `:root {}` are kept.

## Languages

`/` is English; every other language lives at `/<code>/` — fa, ar, es, pt, hi,
zh, ru, fr, tr. Switching language is a real navigation; there is no
client-side language state.

- **The list** is `src/i18n/locales.ts`: code, BCP 47 tag (what `<html lang>`
  and `hreflang` get — Chinese is `zh-Hans`), endonym, direction, `og:locale`,
  writing system, and the extra Google Fonts family the script needs. It is
  imported by `vite.config.ts` too (routes and sitemap), so it must stay free
  of browser and Vite globals.
- **Copy** is one file per language in `src/i18n/`, each typed as `Content`
  (`types.ts`), so a string missing from any language fails `tsc`. `en.ts` is
  the reference. The other nine were translated from it by Claude and have not
  been reviewed by native speakers — `TODO(content)` before launch.
- **How the build gets its pages.** `includedRoutes` in `src/main.tsx` returns
  `allRoutes()` from `src/route.ts` — one path per locale, plus the blog;
  vite-react-ssg calls `createRoot(false, path)` per route and the callback
  swaps `ctx.app` for the page that path names (`routePath` is in the context).
  In the browser the same `routeFromPath` reads it off `location.pathname`.
  There is still no router: `src/route.ts` is only an agreement about what the
  paths are, and every link between pages is a real navigation.
- **Adding a language:** add it to `locales.ts`, write `src/i18n/<code>.ts`,
  register it in `src/i18n/index.ts`. If its script isn't Latin, Cyrillic,
  Arabic, Devanagari or Han, add a `body[data-script='…']` block in
  `index.css`. Build and check `dist/<code>/index.html`.
- **Head, per page:** title/description, canonical to the locale's own URL,
  `hreflang` links for all ten plus `x-default`, `og:locale` and alternates,
  JSON-LD `inLanguage`. The generated sitemap carries the same alternates.
- **RTL (fa, ar).** Use logical Tailwind utilities — `ps-`/`pe-`, `ms-`/`me-`,
  `start-`/`end-` — never `pl-`/`pr-`/`ml-`/`mr-`, and logical properties in
  CSS. Flex and grid mirror on their own. The 3D scene is deliberately _not_
  mirrored (it is a picture); the balance on it is `dir="ltr"` because a number
  with a unit is data.
- **Fonts.** Archivo + IBM Plex Mono cover Latin, Turkish included. Other
  scripts add one family per page from `<Seo>` — Vazirmatn (fa, ar), Noto Sans
  Devanagari (hi), Noto Sans SC (zh), Golos Text (ru) — placed _after_ Archivo
  in the stack, so brand words and Latin terms stay in Archivo and only that
  script's glyphs fall through. The English page never loads them.
- **Per-script typography** is a handful of custom properties
  (`--tracking-display`, `--tracking-eyebrow`, `--tracking-label`,
  `--leading-display`) set on `body[data-script]` in `index.css`: Arabic script
  gets zero tracking everywhere (letters connect), Devanagari and Han get no
  negative tracking, all three get taller display leading, and
  `font-size-adjust` is switched off for them.
- **The switcher** (`LanguageMenu.tsx`) is a `<details>` with plain links, so
  it is in the static HTML and works with JavaScript off; JS only adds light
  dismiss. It is not a popover because anchor positioning is not reliably
  available and a top-layer popover cannot otherwise be anchored to the header.
  The footer repeats the links for crawlers. Each language shows a flag,
  drawn with `<use>` from the SVG sprite in `Flags.tsx` so the ten symbols
  ship once per page inside the static HTML; the language-to-flag mapping is
  `flag` in `locales.ts` (a convention - a language is not a country).

## Blog

Markdown files, no admin panel, no database, in all ten languages:
`/blog/` and `/blog/<slug>/` in English, `/<lang>/blog/…` elsewhere.

- **Content** is `src/content/blog/<slug>/<lang>.md`. The directory _is_ the
  index — adding a file adds a page, in the build and in the sitemap. The slug
  is shared across languages (it stays English) so translations pair up.
- **Frontmatter** is `title`, `description`, `date` (`YYYY-MM-DD`) and `tags`
  (comma-separated). A missing field fails the build rather than shipping an
  untitled post.
- **A post exists in a language only if that file exists.** That is what
  decides hreflang, the sitemap alternates and the switcher: an untranslated
  post is absent in that language, never served as English under a Persian
  URL. `src/blog/posts.ts` is where that rule lives.
- **Markdown is compiled at build time** by `plugins/markdown.ts` into
  `export const meta` / `export const html`. The dialect is small on purpose —
  headings, paragraphs, lists, quotes, fenced code, rules, and inline
  code/bold/italic/links. Note oxfmt formats the posts too and rewrites
  `*this*` into `_this_`, so the renderer accepts both.
- **Post bodies are not in the browser bundle.** `posts.ts` globs `html` only
  when `import.meta.env.SSR || import.meta.env.DEV`, so the production client
  build tree-shakes every body out; `PostBody.tsx` reads the markup back off
  the prerendered DOM, which also keeps hydration a no-op. Adding fifty posts
  therefore costs the landing page nothing. If you make the body reach React
  some other way, check `dist/assets/*.js` for a sentence from a post.
- **Reading time** is counted at build time — words, or Han ideographs where
  there are no spaces.
- **Dates stay ISO** in the mono face. They are data, and a `<time dateTime>`
  is also what a crawler wants; per-locale month names would risk a hydration
  mismatch between Node's ICU and the browser's.
- **`.prose` in `index.css`** is the only running text on the site, so it is
  the one place with typographic defaults instead of utilities. All logical
  properties, so RTL mirrors for free. Links there are underlined ink, never
  the seal blue.

## SEO

- `public/og.png` (1200x630) is the social card. It is a rendered screenshot,
  not a hand-drawn asset: the source page is `design/og.html`, opened at
  1200x630 and captured. Re-render it if the headline or the platform list
  changes, since it repeats them as text.
- `src/site.config.ts` holds what is the same in every language: brand name,
  canonical origin, icon, social image, repository, platform list. Title and
  description are per language, in the content files. `Seo.tsx` turns both
  into head tags (Open Graph, Twitter card, canonical, hreflang, JSON-LD
  `Organization` + `SoftwareApplication` + `WebSite` + `WebPage`). The first
  three describe the site, are byte-identical on all ten pages and point `url`
  at the site root; only `WebPage` is per-page, and it is what carries this
  URL's language, title and image. Keeping per-page facts off the shared `@id`s
  is what stops the ten pages from merging into one contradictory entity.
- **The domain is not in this repo.** The site is served by nginx, so the host
  it answers on is nginx's to know. Every absolute URL — canonical, hreflang,
  Open Graph, JSON-LD, and the `robots.txt` / `sitemap.xml` that
  `vite.config.ts` emits at build time — is written with `ORIGIN_PLACEHOLDER`
  from `src/site.config.ts`: `https://origin.invalid`, a reserved name, so a
  server that was never configured fails visibly instead of pointing every
  canonical at somebody else's site.
  - nginx replaces it with `sub_filter`, and the server config is not in this
    repo. What that config has to get right, because the build depends on it:
    `sub_filter_types` must name `text/xml` and `text/plain` as well as the
    default `text/html`, since the sitemap and robots.txt carry absolute URLs
    the formats require; `sub_filter_once` must be off, since a page holds
    dozens of them; the replacement should be `$scheme://$server_name` rather
    than `$host`, which is client-supplied; and `gzip_static` must stay off,
    since sub_filter cannot rewrite a body it did not decompress.
  - In the browser `absoluteUrl` resolves the origin from `location` instead,
    read off `globalThis` because `vite.config.ts` type-checks this file without
    the DOM lib. So JavaScript clients are correct regardless; the rewrite is
    for the crawlers that never run it.
  - `vite.config.ts` imports `src/site.config.ts`, so keep that file free of
    Vite and browser globals at the top level, the way `locales.ts` is.
  - `robots.txt` and `sitemap.xml` are generated, not checked in; don't add
    copies to `public/`.
- The blog adds `Blog`, `BlogPosting` and `BreadcrumbList` nodes
  (`src/blog/schema.ts`), appended to that same graph through `<Seo graph>`.
  A post page is `og:type=article` and carries `article:published_time`.
- `sitemapEntries` in `vite.config.ts` reads the locale list _and_ the content
  directory with `node:fs`, so blog URLs carry their own `lastmod` (the post's
  date) and only the alternates that exist. The app reads the same directory
  through `import.meta.glob`: one source of truth on disk, two readers.
- `robots.txt` names the AI crawlers explicitly. `Allow: /` under `*` already
  covers them, but `Google-Extended` and `Applebot-Extended` are AI-training
  opt-outs where being named is what makes the intent unambiguous.

## Design system

Direction: **a datasheet for a sealed instrument, in the app icon's colours.**
The icon (`public/favicon.png`) is black, one blue and white. The page is a
blue-black ground with paper-white ink, and that blue held back for one job —
not the violet-gradient-and-glass-card crypto default.

- **Colour.** `--color-paper` (`#070b12`) and `--color-ink` carry the page.
  `--color-seal` is the icon's blue (`#22b8f5`) and is reserved for exactly one
  idea: the boundary your key does not cross. It appears on the hero ring, the
  sealed chip, the "never leaves the device" markers and the divider in the
  boundary section — nowhere else, not even the language menu's current mark.
  The primary button is white on purpose; making it blue would dilute the one
  signal the page depends on. `--color-seal-ink` is the same hue lifted for
  small text; both clear 4.5:1 on the ground. The device slab is a step lighter
  than the ground and separates from it by a hairline ring and top highlight,
  since a dark shadow on a dark page shows nothing. The flags in the language
  menu are the one place other colours appear; they are small and ringed by
  a hairline so they read as data, not decoration.
- **Type.** Archivo (`--font-display`, weight 800, `font-stretch: 112%`, tight
  negative tracking) against IBM Plex Mono. The mono is not decoration: it is
  reserved for things that are literally data or labels — addresses, balances,
  ciphertext, eyebrows, buttons. Non-Latin scripts: see "Languages".
- **Structure.** Sections use `<Section>`, which is the datasheet grid — mono
  label in a start-side rail, content in the main column, hairline rule between
  sections. Numbering (01/02/03) appears only in the seal section, because that
  is the one place the order is real information. The builds section is rows,
  not cards: five platforms, one hairline each, a monochrome platform mark
  (`PlatformIcon.tsx`) at the start of the row and the links at the end. A
  platform with no build says so in the link's place.

### The hero scene

`Hero` and `DeviceScene` share one `transform-style: preserve-3d` stage. The
headline sits on its own Z plane in front of the device layers, so the type and
the object parallax against each other as the pointer moves — that is the
signature, and it is why the copy is inside the scene rather than beside it.

Depth order, back to front: measurement grid → ciphertext vault → seal boundary
ring → the slab (with extruded bottom and right faces) → the sealed chip.

Deliberate choices worth keeping:

- **CSS 3D, not WebGL.** Three.js would add ~160 kB gzip to the LCP path and
  would not prerender. The scene costs nothing and ships inside the static HTML.
- **`.device-box` carries a resting `rotateX(6deg) rotateY(-17deg)`.** Without
  it the planes stack into flat rectangles, and the depth would only ever appear
  on hover — which never happens on touch. It is not flipped for RTL.
- **`usePointerTilt` bails out on coarse pointers and reduced motion.** The
  scene is composed to look finished at rest.
- **`CIPHERTEXT` and the figures are fixed.** Anything generated at render time
  would differ between the prerender and hydration.
- The scene is `aria-hidden` — it pictures claims that are stated as text below,
  and the balance and address on it are illustrative.

## Open TODOs

Search the tree for `TODO(content)`, `TODO(design)` and `TODO(deploy)`:

- `TODO(content)` — in `src/i18n/en.ts`, the "goes to the network" list is
  reasoned from the README rather than read off the implementation. The page
  lists five platforms (Windows, macOS, Linux, Android, iOS) at the owner's
  request; the latest release ships three (Windows, Linux, Android) and the
  README names only Windows and Android — reconcile them.
  The nine translations need a native-speaker pass — the interface copy in
  `src/i18n/` and the nine translated posts under `src/content/blog/` alike.
  `twitterHandle` in `src/site.config.ts` is still null.
- `TODO(deploy)` — Windows, Linux and Android download their asset straight
  from `/releases/latest/download/<file>`, so they follow the newest release on
  their own as long as the asset file names don't change; Android also links to
  Google Play. macOS and iOS have no build, so their `href` in
  `siteConfig.platforms` is null and the row says so; set it once those builds
  exist.

Every product claim on the page traces to the Nura Wallet README. Do not add
security claims beyond it — this is the page people use to decide whether to
trust the app with their keys.

## Claude Code plugins enabled for this project

`.claude/settings.json` enables, at project scope:
`frontend-design`, `superdesign`, `modern-web-guidance`, `chrome-devtools-mcp`,
`playwright`.
