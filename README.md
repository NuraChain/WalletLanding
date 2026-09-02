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

There is none, and there is no domain in the source. The build takes no
environment variables: every absolute URL — canonical, hreflang, Open Graph,
JSON-LD, `robots.txt`, `sitemap.xml` — is written with the placeholder origin
`https://origin.invalid`, and nginx substitutes the live one on the way out.

In a browser the page resolves its own origin from `location`, so JavaScript
clients are right either way. The substitution is what crawlers that don't run
JavaScript, `robots.txt` and `sitemap.xml` depend on. In the server block:

```nginx
sub_filter_types text/xml text/plain;   # sitemap.xml and robots.txt too
sub_filter       'https://origin.invalid' '$scheme://$server_name';
sub_filter_once  off;                   # dozens per page
gzip_static      off;                   # sub_filter can't rewrite a .gz
```

`$server_name`, not `$host`: `$host` is a client-supplied header, and a
canonical URL built from one is worth nothing. Needs `ngx_http_sub_module`
(`nginx -V 2>&1 | grep -o with-http_sub_module`) — present in the nginx.org
packages, Debian/Ubuntu `nginx-full` and `nginx-extras`, and Alpine, but not in
Debian's `nginx-light`.

Copy lives in `src/i18n/` (one file per language, `en.ts` is the reference);
the language list is `src/i18n/locales.ts`; identity and release links are in
`src/site.config.ts`.

See [CLAUDE.md](./CLAUDE.md) for architecture notes and the constraints the
prerendering step imposes.
