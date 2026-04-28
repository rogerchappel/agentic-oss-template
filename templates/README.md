# Templates

This directory contains reusable repository files that can be copied into generated
repositories or used as references when setting up repository policy.

## Customisation

Before copying a template into a generated repository, replace any double-brace
placeholders. Common placeholders are documented in
[`docs/template-variables.md`](../docs/template-variables.md).

At minimum, most generated repositories should replace:

- `{{PROJECT_NAME}}`
- `{{PROJECT_DESCRIPTION}}`
- `{{AUTHOR_NAME}}`
- `{{GITHUB_OWNER}}`
- `{{YEAR}}`
- `{{LICENSE}}`

For a practical setup flow, see
[`docs/repo-customisation.md`](../docs/repo-customisation.md).

## Directory Map

- `agents/`: agent operating instruction templates.
- `contributors/`: contributor, conduct, and review handoff templates.
- `github/`: issue and pull request templates.
- `license/`: license text templates.
- `security/`: security policy and vulnerability reporting templates.
