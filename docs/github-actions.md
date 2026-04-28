# GitHub Actions

This template includes minimal GitHub Actions that are safe for a new repository
before it has application code.

## Included workflows

- `CI` validates core repository files, checks that markdown files are not empty,
  and runs optional Node commands only when `package.json` exists.
- `Docs` validates the docs directory and markdown file presence.
- `Branchbrief` creates a `branchbrief.md` artifact for pull requests.

The workflows do not require repository secrets. They use read-only repository
permissions unless a future project intentionally adds write behavior.

## Customizing CI for Node/npm

When the project becomes a Node package or app, add the relevant scripts to
`package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "test": "vitest run",
    "typecheck": "tsc --noEmit",
    "build": "tsup"
  }
}
```

The baseline CI already calls these commands with `--if-present`, so projects
can add them one at a time.

If a project requires a specific Node version, add `actions/setup-node` before
the optional Node checks:

```yaml
- name: Set up Node
  uses: actions/setup-node@v4
  with:
    node-version: 22
    cache: npm
```

Keep new workflow permissions explicit and avoid adding secrets unless the
workflow cannot work without them.
