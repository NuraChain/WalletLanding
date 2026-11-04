# Nura Wallet Landing Page — SEO-Ready Multilingual Website

This repository contains the web landing page for **Nura Wallet**, the self-custody crypto wallet in the Nura Chain ecosystem. It is built with **React 19, TypeScript, Vite and Tailwind CSS v4**, then prerendered to static HTML with **vite-react-ssg**.

Prerendering gives search engines and link-preview crawlers meaningful page content in the initial HTML instead of relying on client-side JavaScript to render the page.

## SEO and rendering

- **Static rendering:** pages are prerendered during the production build.
- **Per-page metadata:** title and description are generated from the page content.
- **Canonical URLs and language alternates:** the SEO component manages canonical and hreflang metadata.
- **Social previews:** Open Graph metadata is generated for page sharing.
- **Structured data:** JSON-LD is added through the shared SEO component.
- **Internationalisation:** locale-aware routes and page metadata, including right-to-left support for Persian.
- **Performance-minded delivery:** Vite builds static assets and the project includes a small Node.js serving script.

## Technology

| Area | Stack |
| --- | --- |
| UI | React 19 |
| Language | TypeScript |
| Build tool | Vite |
| CSS | Tailwind CSS v4 |
| Static rendering | vite-react-ssg |
| Quality checks | Oxlint, Oxfmt and Playwright |

## Run locally

~~~bash
git clone https://github.com/NuraChain/WalletLanding.git
cd WalletLanding
npm ci
npm run dev
~~~

Build the prerendered website and preview the result:

~~~bash
npm run build
npm run preview
~~~

Useful commands:

| Command | Purpose |
| --- | --- |
| npm run dev | Start the Vite development server |
| npm run build | Type-check and prerender the production website |
| npm run preview | Preview the Vite build |
| npm run serve | Serve the built site with the repository's Node.js script |
| npm run typecheck | Run TypeScript project checks |
| npm run lint | Run Oxlint |
| npm run format:check | Verify formatting with Oxfmt |
| npm run qa:visual | Run responsive visual checks |

The repository also includes service install, start, stop, restart, status and deploy scripts for its supported server setup.

## Project links

- [Nura Wallet website](https://nurawallet.app)
- [Nura Wallet source code and releases](https://github.com/NuraChain/Wallet)
- [Nura Chain](https://nurachain.net)
- [Nura Chain GitHub organisation](https://github.com/NuraChain)

## License

Licensed under the [MIT License](license).
