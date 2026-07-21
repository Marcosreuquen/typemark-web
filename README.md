# typemark-web

Marketing landing page for [TypeMark](https://github.com/Marcosreuquen/typemark) — built with [Astro](https://astro.build), no framework, no client-side JS beyond what Astro ships by default.

Lives alongside the app repo as a sibling directory:

```
typemark/
├── app/   ← the Electron app (separate repo)
└── web/   ← this repo
```

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start the dev server at `localhost:4321`      |
| `npm run build`     | Build the static site to `./dist/`            |
| `npm run preview`   | Preview the production build locally          |

## Structure

- `src/pages/index.astro` — the whole landing page (hero, features, download section), styled inline.
- `public/favicon.svg` — branded "T" mark favicon.

The download button links to `github.com/Marcosreuquen/typemark/releases/latest`, which GitHub always redirects to whatever the newest release is — no version to hardcode here when the app ships an update.
