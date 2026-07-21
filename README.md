# typemark-web

Marketing landing page for TypeMark — built with [Astro](https://astro.build), no framework, no client-side JS beyond what Astro ships by default. Styled to match the app's own **Dark** theme (same colors, same font pairing) so the two feel like one product.

The app's source isn't public — this repo (and the site it deploys) intentionally has no links to it. See "Downloads" below.

Lives alongside the app repo as a sibling directory:

```
typemark/
├── app/   ← the Electron app (separate, private repo)
└── web/   ← this repo
```

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start the dev server at `localhost:4321`      |
| `npm run build`     | Build the static site to `./dist/`            |
| `npm run preview`   | Preview the production build locally (respects the `/typemark-web` base path — open the URL it prints, not `localhost:4321` directly) |

## Structure

- `src/pages/index.astro` — the whole landing page (hero, features, download section), styled inline in the app's Dark theme palette.
- `public/favicon.svg` — branded "T" mark favicon, same accent color as the page.
- `public/demo.gif` — **placeholder.** Replace this file directly with a screen recording of the app (same filename, `demo.gif`) — the page already points at it, nothing else to wire up.

## Downloads

The download button links to `github.com/Marcosreuquen/typemark-releases/releases/latest`. `typemark-releases` is a separate, empty public repo that only ever receives release assets from the app's CI — it has no source code, so linking to it doesn't expose anything. See the app repo's README for how that publish step is wired.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds with Astro and deploys to GitHub Pages. One-time setup on the repo: **Settings → Pages → Source: GitHub Actions**. Served at `https://marcosreuquen.github.io/typemark-web/` (the `base: '/typemark-web'` in `astro.config.mjs` matches this — update both together if this ever moves to a custom domain).
