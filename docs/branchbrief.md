# Branchbrief

Branchbrief is a lightweight pull request summary workflow.

The baseline workflow writes a step summary containing:

- base and head commit SHAs
- changed files
- recent commits

It does not post comments, mutate pull requests, or require secrets. This keeps it safe for template projects and forks.

## Customizing

As the project matures, Branchbrief can be extended to include:

- test commands and status
- generated release notes
- package or documentation change summaries
- links to preview deployments

If you later want Branchbrief to post pull request comments, update workflow permissions deliberately and document why write access is needed.
