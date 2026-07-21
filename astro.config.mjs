// @ts-check
import { defineConfig } from 'astro/config';

// Served from a GitHub Pages *project* site (marcosreuquen.github.io/typemark-web),
// not a user/org root page — hence the `base`. Drop it (and set `site` to the
// custom domain) if this ever moves to its own domain.
export default defineConfig({
  site: 'https://marcosreuquen.github.io',
  base: '/typemark-web',
});
