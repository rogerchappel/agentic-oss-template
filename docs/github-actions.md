# GitHub Actions

This template includes baseline GitHub Actions that work before a full application exists.

## Workflows

- `ci.yml` validates repository hygiene and confirms expected baseline files exist.
- `docs.yml` validates documentation paths without requiring Node, npm, or a docs generator.
- `branchbrief.yml` writes a branch summary to the workflow step summary for pull requests and manual runs.

All workflows use read-only permissions and do not require secrets.

## Customizing for Node/npm

When the project has a real `package.json`, extend `ci.yml` with the smallest useful checks for that project:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 22
    cache: npm

- run: npm ci
- run: npm run lint --if-present
- run: npm test --if-present
- run: npm run build --if-present
```

Prefer adding checks only after the matching script exists. Keep CI fast enough that contributors can use it as a normal feedback loop.
