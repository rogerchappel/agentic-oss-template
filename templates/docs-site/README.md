# Optional Docs Site Template

This directory contains an optional Astro/Starlight documentation site scaffold for generated projects.

It is not required by the base template. Copy it into a generated project only when that project wants hosted or locally built documentation.

## Use

Recommended generated-project layout:

```text
docs-site/
  astro.config.mjs
  package.json
  src/
```

From the copied `docs-site/` directory:

```sh
npm install
npm run dev
npm run build
```

Replace all `{{PLACEHOLDER}}` values before publishing.

## Deployment

The static build output is `dist/`.

Cloudflare Pages, Netlify, Vercel, GitHub Pages, or another static host can deploy this site. Cloudflare Pages guidance is available in `docs/cloudflare-pages.md`, but Cloudflare is optional.
