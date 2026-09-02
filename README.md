# WalletLanding

Landing page built with Vite, React 19, Tailwind CSS v4 and TypeScript,
prerendered to static HTML with `vite-react-ssg` so search crawlers and AI
answer engines get real content instead of an empty `<div id="root">`.

Ships in ten languages, one static page each: `/` (English), `/fa/`, `/ar/`,
`/es/`, `/pt/`, `/hi/`, `/zh/`, `/ru/`, `/fr/`, `/tr/`.

## Getting started

```sh
npm install
npm run dev
```

The dev server serves every language from the same SPA: open
`http://localhost:4100/fa/` for Persian.

## Writing a post

Posts are markdown files; there is no admin panel and nothing to register:

```sh
src/content/blog/<slug>/<lang>.md      # en, fa, ar, es, pt, hi, zh, ru, fr, tr
```

Each file starts with frontmatter — `title`, `description`, `date`
(`YYYY-MM-DD`) and comma-separated `tags` — and the rest is the post. Build,
and `/blog/<slug>/` exists in every language you wrote a file for, with its
hreflang set and its sitemap entry. A language you skipped simply has no page
for that post.

## Scripts

- `npm run dev` — dev server
- `npm run build` — typecheck, then build and prerender into `dist/`
- `npm run preview` — serve the built output
- `npm run check` — typecheck + lint + format check
- `npm run lint:fix` / `npm run format` — apply fixes

## Configuration

Set the production domain in `.env`:

```
VITE_SITE_URL=https://your-domain.com
```

It drives the canonical and hreflang URLs, Open Graph tags, JSON-LD, and the
generated `robots.txt` and `sitemap.xml`.

Copy lives in `src/i18n/` (one file per language, `en.ts` is the reference);
the language list is `src/i18n/locales.ts`; identity and release links are in
`src/site.config.ts`.

See [CLAUDE.md](./CLAUDE.md) for architecture notes and the constraints the
prerendering step imposes.
