# Dependency Policy

Dependabot is enabled for GitHub Actions updates.

## Current Scope

- Ecosystem: GitHub Actions
- Schedule: weekly
- Pull request limit: 5 open updates
- Commit prefix: `ci`

## Adding Package Managers Later

Add npm, pnpm, Python, or other ecosystems only after the project has the corresponding manifest and lockfile. For Node/npm, add a second Dependabot entry like this:

```yaml
- package-ecosystem: npm
  directory: /
  schedule:
    interval: weekly
```

Review dependency updates like normal code changes. For major version updates, check release notes, run the relevant tests, and prefer one major upgrade per pull request.
