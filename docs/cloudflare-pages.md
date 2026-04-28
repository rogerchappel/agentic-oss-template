# Cloudflare Pages

This guide explains how projects generated from this template can optionally deploy generated documentation sites with Cloudflare Pages.

Cloudflare Pages is not required for this template. Use it only when a generated project wants hosted documentation and the maintainers have chosen Cloudflare as the hosting provider.

## When To Use This

Use Cloudflare Pages when a generated project needs:

- a static documentation site built from a generated docs-site package
- preview deployments for pull requests
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
- Root directory: `docs-site`
- Build command: `{{DOCS_BUILD_COMMAND}}`
- Build output directory: `{{DOCS_BUILD_OUTPUT_DIR}}`
- Production branch: the generated project's default branch, usually `main`
- Preview deployments: enabled for pull requests when maintainers want public preview URLs

For the provided `templates/docs-site/` example, use:

- `{{DOCS_BUILD_COMMAND}}`: `npm run build`
- `{{DOCS_BUILD_OUTPUT_DIR}}`: `dist`

If the generated docs site uses a package manager other than npm, update the build command to match the generated project, for example `pnpm build`, `yarn build`, or `npm run docs:build`.

## Environment Variables

This repository does not require or store Cloudflare secrets.

Generated projects usually do not need repository secrets for dashboard-managed Cloudflare Pages builds. If a project deploys through GitHub Actions instead, store Cloudflare credentials only in that generated project's GitHub Actions secrets or variables.

Common generated-project settings:

- `CLOUDFLARE_API_TOKEN`: GitHub Actions secret, scoped to Cloudflare Pages deployment
- `CLOUDFLARE_ACCOUNT_ID`: GitHub Actions variable or secret
- `CLOUDFLARE_PROJECT_NAME`: GitHub Actions variable

No real values for these settings belong in this template repository.

## What Not To Commit

Do not commit:

- Cloudflare API tokens or account credentials
- `.env`, `.env.local`, or exported dashboard environment files
- generated Cloudflare deployment output
- project-specific production domains unless the generated repository intentionally documents them
- copied workflow files before the generated project has reviewed the branch, package-manager, and output-directory placeholders

## Optional GitHub Actions Deployment

The `templates/cloudflare-pages/` directory contains optional examples for generated projects that prefer GitHub Actions or checked-in Pages configuration over dashboard-managed builds.

Use it only after the generated project has:

- copied in an optional docs site
- created a Cloudflare Pages project
- configured required GitHub Actions secrets or variables in the generated repository
- replaced placeholders such as `{{CLOUDFLARE_PROJECT_NAME}}`
- reviewed the workflow for the project's branch, package-manager, and output-directory conventions

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
