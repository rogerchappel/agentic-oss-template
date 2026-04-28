# Cloudflare Pages

This guide explains how projects generated from this template can optionally deploy hosted documentation with Cloudflare Pages.

Cloudflare Pages is not required for this template. Use it only when a generated project wants public hosted documentation and the maintainers have chosen Cloudflare as the hosting provider.

## When To Use This

Use Cloudflare Pages when a project needs:

- a static documentation site
- previews for pull requests
- deployment from a GitHub repository
- hosting without adding application infrastructure

Skip this guide when the project keeps documentation only in Markdown, uses another host, or does not need hosted docs.

## Suggested Project Layout

For a docs site copied from `templates/docs-site/`, use:

```text
docs-site/
  astro.config.mjs
  package.json
  src/
```

The docs site should remain optional. Do not make the root package, CI, or base template depend on it unless the generated project explicitly adopts hosted docs.

## Cloudflare Pages Settings

In the Cloudflare dashboard, create a Pages project connected to the generated repository.

Recommended settings for an Astro/Starlight docs site:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `docs-site`
- Production branch: the generated project's default branch, usually `main`

If the docs site uses a package manager other than npm, update the build command to match the generated project.

## Environment Variables

This repository does not require or store Cloudflare secrets.

Generated projects usually do not need secrets for dashboard-managed Cloudflare Pages builds. If a project deploys through GitHub Actions instead, store Cloudflare credentials only in that generated project's GitHub Actions secrets or variables.

Common generated-project settings:

- `CLOUDFLARE_API_TOKEN`: GitHub Actions secret, scoped to Cloudflare Pages deployment
- `CLOUDFLARE_ACCOUNT_ID`: GitHub Actions variable or secret
- `CLOUDFLARE_PROJECT_NAME`: GitHub Actions variable

Do not commit API tokens, account credentials, or `.env` files.

## Optional GitHub Actions Deployment

The `templates/cloudflare-pages/` directory contains an optional workflow example for generated projects that prefer GitHub Actions over dashboard-managed builds.

Use it only after the generated project has:

- copied in an optional docs site
- created a Cloudflare Pages project
- configured required GitHub Actions secrets or variables in the generated repository
- reviewed the workflow for the project's branch and package-manager conventions

Dashboard-managed Pages builds are simpler and should be the default recommendation for most small documentation sites.

## Verification

Before enabling Cloudflare Pages in a generated project, confirm:

- the docs site builds locally
- the Cloudflare Pages project points at the docs-site root
- no Cloudflare credentials are committed
- Cloudflare is described as optional in project docs
- pull request previews are enabled only if the project wants them

## Rollback

To roll back Cloudflare Pages adoption in a generated project:

1. Disable or delete the Cloudflare Pages project.
2. Remove any copied Cloudflare workflow from `.github/workflows/`.
3. Remove Cloudflare GitHub Actions secrets or variables if they are no longer used.
4. Keep the Markdown docs unless the project no longer needs them.
