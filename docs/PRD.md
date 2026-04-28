Below is a full PRD you can give directly to an agent/developer.

Save it as:

docs/PRD.md

Repo name:

agentic-oss-template

⸻

# PRD: agentic-oss-template
## Product Name
**agentic-oss-template**
## Tagline
A production-ready starter kit for agent-friendly open-source projects.
## One-Line Pitch
`agentic-oss-template` gives new OSS projects the boring-but-critical infrastructure from day one: MIT license, AGENTS.md, atomic commit policy, review packs, branchbrief workflow, CI, Dependabot, release docs, security policy, contributor templates, npm package scaffold, Astro/Starlight docs scaffold, and Cloudflare Pages deployment guidance.
---
# 1. Objective
Create a reusable public GitHub template repository that Roger Chappel can use to launch future open-source projects quickly and consistently.
The template should support projects such as:
- CLI tools
- agentic developer utilities
- Codex/OpenClaw workflows
- GitHub Actions tooling
- npm packages
- docs sites
- small SaaS-adjacent developer tools
- OSS experiments that may become serious projects
The goal is to avoid rebuilding project hygiene every time a new OSS repo is created.
Future repos should start with:
- clear license
- agent instructions
- review-pack workflow
- branchbrief support
- Dependabot
- CI
- release-cycle docs
- changelog
- roadmap
- security policy
- contributor guide
- GitHub issue templates
- pull request template
- optional docs site scaffold
- optional npm package scaffold
- Cloudflare Pages deployment guidance
This repo is a **template and documentation source**, not a product implementation.
---
# 2. Core Product Principle
The template should help projects move fast without becoming chaotic.
> Fast OSS shipping requires boring infrastructure: clear instructions, safe automation, reviewable branches, dependency hygiene, release discipline, and contributor trust.
The template should support both humans and AI agents.
---
# 3. Target Users
## Primary User
Roger Chappel, creating many OSS projects under the `rogerchappel` GitHub identity.
## Secondary Users
- developers building agent-assisted OSS tools
- maintainers using Codex, OpenClaw, Claude Code, Copilot, or similar agents
- contributors who need clear expectations
- AI agents bootstrapping new repos
- people who want a serious OSS starter kit without overbuilding
---
# 4. Repository Type
This repo should be a **public GitHub template repository**.
After creation, it should be marked as a GitHub template repo so new repositories can be created from it.
Suggested GitHub repo description:
```text
Production-ready starter kit for agent-friendly open-source projects.

Suggested GitHub topics:

agentic-development
oss-template
github-actions
dependabot
branchbrief
codex
openclaw
copilot
developer-tools
templates
open-source

⸻

5. License

Default License

Use the MIT License.

Requirements

Create a top-level LICENSE file using the standard MIT License text.

Copyright:

Copyright (c) 2026 Roger Chappel

Do not invent a custom license.
Do not add extra restrictions to MIT.
Do not mix licenses unless explicitly instructed.

Also include a reusable license template:

templates/license/LICENSE.MIT.template

Use placeholders:

{{YEAR}}
{{AUTHOR_NAME}}

README License Section

Add:

## License
This template is released under the MIT License.
Projects generated from this template default to MIT, but you should choose the license that fits your project before publishing.

⸻

6. Non-Goals

This project should not:

* create a full app
* create fake product logic
* generate unnecessary source code
* become a SaaS
* require API keys
* require Cloudflare
* require npm publishing
* require LLMs
* include private company details
* include client-specific docs
* include secrets
* assume every future repo is Node-only
* overbuild a CLI generator in V1

A future V2 may include a repo-generator CLI, but V1 is a template repo.

⸻

7. Required Top-Level Files

The repo must include:

README.md
LICENSE
AGENTS.md
CONTRIBUTING.md
SECURITY.md
CODE_OF_CONDUCT.md
CHANGELOG.md
ROADMAP.md
.gitignore
.editorconfig
.github/dependabot.yml
.github/pull_request_template.md
.github/ISSUE_TEMPLATE/bug_report.md
.github/ISSUE_TEMPLATE/feature_request.md
.github/ISSUE_TEMPLATE/agent_task.md
.github/workflows/ci.yml
.github/workflows/branchbrief.yml
.github/workflows/docs.yml
docs/
templates/
scripts/

⸻

8. Required Docs

Create the following docs:

docs/PRD.md
docs/repo-customisation.md
docs/agent-workflow.md
docs/branchbrief.md
docs/dependency-policy.md
docs/release-process.md
docs/release-checklist.md
docs/security-policy.md
docs/npm-publishing.md
docs/cloudflare-pages.md
docs/github-actions.md
docs/copilot.md
docs/llm-policy.md
docs/template-variables.md

Each doc should be useful as a source document for both humans and agents.

⸻

9. Required Template Directories

Create:

templates/
  agents/
  github/
  release/
  docs-site/
  npm-package/
  cloudflare-pages/
  branchbrief/
  dependabot/
  security/
  contributors/
  license/

Suggested full tree:

templates/
  README.md
  agents/
    AGENTS.template.md
    AGENTS.snippet.md
  github/
    dependabot.yml
    pull_request_template.md
    ISSUE_TEMPLATE/
      bug_report.md
      feature_request.md
      agent_task.md
    workflows/
      ci.yml
      branchbrief.yml
      docs.yml
      publish.yml
  release/
    CHANGELOG.template.md
    ROADMAP.template.md
    release-process.template.md
    release-checklist.template.md
  docs-site/
    astro.config.mjs.template
    wrangler.toml.template
    src/
      content/
        config.ts.template
        docs/
          index.mdx.template
          getting-started.mdx.template
          cli-reference.mdx.template
          github-actions.mdx.template
          contributors.mdx.template
  npm-package/
    package.json.template
    tsconfig.json.template
    tsup.config.ts.template
    vitest.config.ts.template
    src/
      cli.ts.template
      index.ts.template
    tests/
      basic.test.ts.template
    README-snippet.md
  cloudflare-pages/
    wrangler.toml.template
    deployment-notes.md
  branchbrief/
    branchbrief.workflow.yml
    BRANCH_BRIEF.example.md
  dependabot/
    dependabot.yml
  security/
    SECURITY.template.md
    NOTICE.template.md
  contributors/
    CONTRIBUTING.template.md
    CODE_OF_CONDUCT.template.md
  license/
    LICENSE.MIT.template

⸻

10. Placeholder Variables

Use placeholders consistently in templates:

{{PROJECT_NAME}}
{{PROJECT_DESCRIPTION}}
{{GITHUB_OWNER}}
{{GITHUB_REPO}}
{{PACKAGE_NAME}}
{{DOCS_URL}}
{{HOMEPAGE_URL}}
{{AUTHOR_NAME}}
{{AUTHOR_EMAIL}}
{{YEAR}}
{{LICENSE}}
{{NODE_VERSION}}
{{CLOUDFLARE_PROJECT_NAME}}

Create:

docs/template-variables.md

This doc should explain every placeholder and where it should be replaced.

⸻

11. README Requirements

The README should be clear, practical, and credible.

Hero

# agentic-oss-template
A production-ready starter kit for agent-friendly open-source projects.
Start new OSS projects with the boring-but-critical infrastructure already wired: agent instructions, atomic commits, review packs, branchbrief, CI, Dependabot, release docs, security policy, contributor templates, and optional docs-site/npm scaffolds.

README Must Include

1. What this repo is
2. Who it is for
3. What is included
4. How to use it for a new repo
5. How to customise it
6. How agents should use it
7. How it fits with branchbrief
8. How it fits with Codex/OpenClaw/Claude Code/Copilot
9. Which files should be edited for a new project
10. Which files can be removed if not needed
11. How to deploy docs to Cloudflare Pages
12. How to prepare npm publishing
13. How to enable Dependabot/security settings
14. License section

README Tone

Professional, practical, confident.

Avoid hype.
Avoid fake metrics.
Avoid claiming this solves every OSS problem.

⸻

12. AGENTS.md Requirements

Create a complete AGENTS.md suitable for future projects.

It must include the following sections.

12.1 Core Principle

## Core Principle
Move fast, but keep the work reviewable, reversible, verifiable, and safe.
Do not optimise for raw commit count.
Optimise for clean engineering throughput.

12.2 Default Workflow

Agents must:

1. Read repo instructions.
2. State objective.
3. State expected blast radius.
4. List files likely to change.
5. Propose commit plan.
6. Propose verification plan.
7. State risk level.
8. Work on a branch.
9. Use atomic commits.
10. Return a review pack.

12.3 Branch Policy

## Branch Policy
For production, company, client, or community repos:
- work on a branch
- use atomic commits
- open or prepare a PR
- do not merge without explicit human approval
- do not rewrite shared history unless explicitly instructed

12.4 Commit Policy

Must include:

* Conventional Commits
* one commit equals one reviewable intent
* no arbitrary micro-commits
* no mixed unrelated changes

Allowed commit types:

feat:
fix:
test:
docs:
refactor:
ci:
chore:
perf:
types:

12.5 Risk Policy

Agents must stop before touching:

auth
security
payments
billing
Stripe
production data
data deletion
migrations
secrets
environment variables
public API compatibility
licensing
telemetry/privacy behaviour
destructive commands
production configuration
major dependency upgrades

12.6 Verification Policy

Every task must include verification.

If verification was not run, agents must say so clearly.

12.7 Review Pack Format

Include:

## Review Pack
Repo:
Branch:
PR:
Task:
Status:
Summary:
Commits:
Files changed:
Verification:
Risk level:
Rollback plan:
Human decision needed:
Next recommended task:

12.8 Dependabot Policy

Include:

## Dependabot Policy
Dependabot is allowed for dependency hygiene, but PR noise must be controlled.
Rules:
- Use grouped dependency updates.
- Use weekly schedules by default.
- Keep open PR limits low.
- Do not auto-merge major updates.
- Do not auto-merge production dependency updates without tests.
- Use branchbrief on Dependabot PRs before merge.
- Treat major updates as medium or high risk.
- Treat auth, payment, crypto, database, build, and deployment dependency updates as high risk.

12.9 Release-Cycle Policy

Include:

## Release Cycle Tasks
Agents may perform release-cycle maintenance as atomic commits.
Allowed release-cycle commits:
- `docs(changelog): add unreleased section`
- `chore(version): start next development cycle`
- `docs(roadmap): update next milestone`
- `docs(release): update release process`
- `ci(release): add release smoke check`
Rules:
- Do not create release-cycle commits unless there is a real release or milestone transition.
- Do not bump versions randomly.
- Do not tag or publish releases without explicit approval.
- Do not modify npm publishing settings without approval.
- Keep changelog, roadmap, and version changes separate when they represent separate intents.

⸻

13. Dependabot Requirements

Create:

.github/dependabot.yml

Use:

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      day: "monday"
      time: "08:00"
      timezone: "Australia/Brisbane"
    open-pull-requests-limit: 5
    groups:
      dev-dependencies:
        dependency-type: "development"
        update-types:
          - "minor"
          - "patch"
      production-dependencies:
        dependency-type: "production"
        update-types:
          - "patch"
    commit-message:
      prefix: "chore"
      include: "scope"
    labels:
      - "dependencies"
      - "automated"
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
      day: "monday"
      time: "08:30"
      timezone: "Australia/Brisbane"
    open-pull-requests-limit: 3
    groups:
      github-actions:
        patterns:
          - "*"
    commit-message:
      prefix: "ci"
      include: "scope"
    labels:
      - "dependencies"
      - "github-actions"
      - "automated"

Also create:

docs/dependency-policy.md

It must explain:

* why Dependabot is enabled
* grouped updates
* weekly schedule
* no auto-merge for majors
* how to review dependency PRs
* how to use branchbrief on dependency PRs
* high-risk dependency types

⸻

14. GitHub Workflows

14.1 CI Workflow

Create:

.github/workflows/ci.yml

The workflow should be template-friendly.

It should:

* run on pull requests and pushes to main
* checkout code
* setup Node
* install dependencies if package files exist
* run tests if test script exists
* run build if build script exists
* run typecheck if typecheck script exists
* avoid failing just because optional scripts are missing in a template repo

Prefer simple and safe.

14.2 Branchbrief Workflow

Create:

.github/workflows/branchbrief.yml

It should:

* run on pull requests
* use minimal read-only permissions
* checkout with fetch-depth: 0
* run branchbrief if available
* generate BRANCH_BRIEF.md
* append it to $GITHUB_STEP_SUMMARY
* upload it as an artifact
* not comment on PRs by default

If branchbrief is not available in the template repo, document this and provide the workflow under templates/github/workflows/branchbrief.yml.

Default permissions:

permissions:
  contents: read
  pull-requests: read

14.3 Docs Workflow

Create either:

.github/workflows/docs.yml

or:

templates/github/workflows/docs.yml

It should build Astro/Starlight docs if present.

Do not deploy automatically unless Cloudflare is configured.

14.4 Publish Workflow Template

Create:

templates/github/workflows/publish.yml

This should use npm Trusted Publishing, but it should be a template only unless the root repo is intended to publish to npm.

⸻

15. GitHub Issue and PR Templates

Create:

.github/pull_request_template.md
.github/ISSUE_TEMPLATE/bug_report.md
.github/ISSUE_TEMPLATE/feature_request.md
.github/ISSUE_TEMPLATE/agent_task.md

PR Template Must Include

## Summary
## Changes
## Verification
## Risk Level
Low / Medium / High
## Rollback Plan
## Branch Brief
Link or paste branchbrief output.
## Human Decision Needed
## Checklist
- [ ] I used atomic commits
- [ ] I ran relevant verification
- [ ] I updated docs where needed
- [ ] I checked for secrets
- [ ] I considered rollback

Agent Task Template Must Include

## Objective
## Context
## Allowed Paths
## Forbidden Paths
## Risk Level
## Verification Commands
## Expected Commits
## Required Review Pack
## Human Decision Needed

⸻

16. Release-Cycle Requirements

Create:

CHANGELOG.md
ROADMAP.md
docs/release-process.md
docs/release-checklist.md

CHANGELOG.md

Use:

# Changelog
## 0.1.0 — Unreleased
### Added
### Changed
### Fixed
### Docs
### Internal

ROADMAP.md

Include:

# Roadmap
## V1 — Template Foundation
- MIT license
- AGENTS.md
- GitHub templates
- Dependabot
- CI
- branchbrief workflow
- release-cycle docs
- npm scaffold
- docs-site scaffold
- Cloudflare Pages guidance
## V2 — Generator
- CLI generator
- repo type presets
- interactive setup
- label sync
- template validation
## V3 — Repo Factory
- GitHub repo creation
- issue seeding
- CrewCMD integration
- branchbrief setup
- docs deployment setup
- npm publishing setup

Release Process Doc

Must include:

* release principles
* versioning
* changelog updates
* npm release checks
* GitHub release process
* Cloudflare Pages checks
* post-release “start next development cycle”
* what agents may do
* what only humans may do

Release Checklist

Must include:

# Release Checklist
## Before Release
- [ ] Tests pass
- [ ] Build passes
- [ ] branchbrief generated
- [ ] Changelog updated
- [ ] README current
- [ ] Docs current
- [ ] npm pack dry-run clean
- [ ] No secrets included
- [ ] Security policy current
## Release
- [ ] Version bumped
- [ ] GitHub release drafted
- [ ] npm publish approved
- [ ] Docs deployed
## After Release
- [ ] Start next changelog section
- [ ] Update roadmap
- [ ] Create follow-up issues

⸻

17. Branchbrief Requirements

Create:

docs/branchbrief.md
templates/branchbrief/branchbrief.workflow.yml
templates/branchbrief/BRANCH_BRIEF.example.md

Docs should explain:

* what branchbrief is
* why it matters
* how to use it locally
* how to use it in GitHub Actions
* how to use it with Copilot review context
* how to use it in agent handoffs
* how to treat branchbrief as review support, not a replacement for review

⸻

18. npm Package Scaffold

Under:

templates/npm-package/

Create:

package.json.template
tsconfig.json.template
tsup.config.ts.template
vitest.config.ts.template
src/cli.ts.template
src/index.ts.template
tests/basic.test.ts.template
README-snippet.md

The npm package template should support:

* TypeScript
* CLI bin
* build
* test
* typecheck
* npm pack dry-run
* Trusted Publishing notes

package.json.template Must Include

{
  "name": "{{PACKAGE_NAME}}",
  "version": "0.1.0",
  "description": "{{PROJECT_DESCRIPTION}}",
  "type": "module",
  "bin": {
    "{{PROJECT_NAME}}": "./dist/cli.js"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE",
    "CHANGELOG.md"
  ],
  "scripts": {
    "build": "tsup",
    "test": "vitest run",
    "typecheck": "tsc --noEmit",
    "pack:dry-run": "npm pack --dry-run"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/{{GITHUB_OWNER}}/{{GITHUB_REPO}}.git"
  },
  "homepage": "{{HOMEPAGE_URL}}",
  "bugs": {
    "url": "https://github.com/{{GITHUB_OWNER}}/{{GITHUB_REPO}}/issues"
  },
  "license": "MIT"
}

⸻

19. Astro/Starlight Docs Scaffold

Under:

templates/docs-site/

Create template files for an Astro/Starlight docs site.

Required stack:

Astro
@astrojs/starlight
Content under src/content/docs/
Config in astro.config.mjs
Build output dist/
Deploy to Cloudflare Pages

Include:

astro.config.mjs.template
wrangler.toml.template
src/content/config.ts.template
src/content/docs/index.mdx.template
src/content/docs/getting-started.mdx.template
src/content/docs/cli-reference.mdx.template
src/content/docs/github-actions.mdx.template
src/content/docs/contributors.mdx.template

Cloudflare Pages Defaults

Document:

Framework preset: Astro
Build command: npm run build:docs
Build output directory: dist
Root directory: /

Create:

docs/cloudflare-pages.md

It must explain:

* deploy to Cloudflare Pages
* preview deployments
* custom domains
* using <project>.pages.dev
* using <project>.rogerchappel.com only for flagship projects

⸻

20. Copilot Support

Create:

docs/copilot.md
templates/github/copilot-instructions.md

The docs should explain:

* Copilot is optional
* template works without Copilot
* .github/copilot-instructions.md can guide Copilot
* branchbrief output can be pasted into Copilot review context
* Copilot should not be treated as final approval

The template instructions should include:

# GitHub Copilot Instructions
This repository uses branch briefs for review handoff.
When reviewing or modifying code:
- keep PRs focused and reviewable
- preserve atomic commits
- respect AGENTS.md and repository instructions
- call out risky files explicitly
- suggest relevant verification
- do not approve production, payment, auth, migration, or secret-related changes without human review
When opening or updating a PR, include:
- summary
- verification
- risk level
- rollback notes
- human decision needed

⸻

21. LLM Policy

Create:

docs/llm-policy.md

It should state:

* no LLM required by default
* no API keys required by default
* no network calls by default
* no hidden credential usage
* if future tools use LLMs, usage must be explicit
* providers and data modes must be disclosed
* patch/full source sharing requires opt-in
* secrets must never be printed or transmitted

Suggested line:

Local-first by default. LLM-enhanced by choice.

⸻

22. Security Requirements

Create:

SECURITY.md
docs/security-policy.md
templates/security/SECURITY.template.md
templates/security/NOTICE.template.md

SECURITY.md must include:

* supported versions
* how to report vulnerabilities
* no public disclosure before fix
* do not include secrets in issues
* dependency/security update expectations

Add NOTICE.template.md:

# Notice
This project is licensed under the MIT License.
This file may be used to document third-party notices, attributions, generated assets, or bundled dependencies that require attribution.

⸻

23. Contributor Guide

Create:

CONTRIBUTING.md
templates/contributors/CONTRIBUTING.template.md

Must include:

* setup
* branch workflow
* commit style
* running checks
* using branchbrief
* opening PRs
* agent contributor expectations
* security expectations
* release expectations

⸻

24. Code of Conduct

Create:

CODE_OF_CONDUCT.md
templates/contributors/CODE_OF_CONDUCT.template.md

Use a concise, standard code of conduct. Keep it professional and maintainable.

⸻

25. Scripts

Create:

scripts/check-template

It should be simple and safe.

V1 script can validate:

* required files exist
* required template directories exist
* no obvious unresolved private values
* no .env files are present
* docs exist
* YAML files exist

Do not overbuild.
Do not add a full generator in V1.

Optional script:

scripts/list-template-files

⸻

26. V1 Acceptance Criteria

The repo is complete when:

* top-level README exists and explains the template
* MIT LICENSE exists
* AGENTS.md exists and is complete
* CONTRIBUTING.md exists
* SECURITY.md exists
* CODE_OF_CONDUCT.md exists
* CHANGELOG.md exists
* ROADMAP.md exists
* Dependabot config exists
* GitHub issue templates exist
* PR template exists
* CI workflow or CI template exists
* branchbrief workflow or branchbrief workflow template exists
* release process docs exist
* dependency policy docs exist
* Cloudflare Pages docs exist
* npm package scaffold exists
* Astro/Starlight docs scaffold exists
* MIT license template exists
* template variables doc exists
* repo customisation guide exists
* no private company/client details are present
* no secrets are present
* placeholders are consistent
* Markdown renders cleanly
* YAML is syntactically reasonable
* scripts are safe and non-destructive
* final review pack is returned

⸻

27. Suggested Initial Commits

Use atomic commits:

chore(repo): scaffold agentic oss template
chore(license): add MIT license and OSS governance baseline
docs(agents): add reusable agent workflow policy
chore(github): add issue and pull request templates
chore(deps): add dependabot template
docs(release): add release-cycle templates
docs(branchbrief): add branch brief workflow template
docs(site): add astro starlight docs scaffold templates
docs(npm): add npm package scaffold templates
docs(factory): document repo customisation workflow
docs(readme): explain template usage

⸻

28. Agent Instructions for Building This Repo

The developer/agent must:

1. Create the repo.
2. Use MIT license.
3. Add governance files.
4. Add template files.
5. Add docs.
6. Avoid fake app code.
7. Avoid private details.
8. Avoid secrets.
9. Use atomic commits.
10. Return a review pack.

Required final review pack:

## Review Pack
Repo:
Branch:
PR:
Task:
Status:
Summary:
Commits:
Files changed:
Verification:
Risk level:
Rollback plan:
Human decision needed:
Next recommended task:
## Template Summary
Included:
Missing:
Recommended GitHub description:
Recommended GitHub topics:
Should this be marked as a template repository:
Recommended first follow-up issues:

⸻

29. Recommended First Follow-Up Issues

After V1 lands, create issues:

## Issue 1: Add template validation script
Build a simple validation script that checks required files, required placeholders, and YAML/Markdown sanity.
## Issue 2: Add CLI generator prototype
Explore a future `create-agentic-oss` CLI that copies templates and replaces placeholders.
## Issue 3: Add repo type presets
Add presets for:
- CLI package
- docs site
- GitHub Action
- npm library
- OpenClaw plugin
## Issue 4: Add GitHub label sync template
Add a standard label set for agentic OSS projects.
## Issue 5: Add CrewCMD integration notes
Document how CrewCMD could create repos from this template.

⸻

30. Future Roadmap

V1 — Template Foundation

* MIT license
* AGENTS.md
* GitHub templates
* Dependabot
* CI
* branchbrief workflow
* release-cycle docs
* npm scaffold
* docs-site scaffold
* Cloudflare Pages guidance

V2 — Generator

* CLI generator
* interactive project setup
* repo type presets
* GitHub labels sync
* template validation
* placeholder replacement
* docs deployment checklist

V3 — Repo Factory

* automatic GitHub repo creation
* issue seeding
* CrewCMD integration
* branchbrief setup
* docs deployment setup
* npm publishing setup
* Cloudflare Pages setup guidance
* project metadata index generation

⸻

31. Final Product Promise

agentic-oss-template makes serious OSS repo setup repeatable.

It helps future projects start with trust, safety, reviewability, release discipline, and agent-friendly workflows already in place.

Suggested handoff prompt:
```text
Build the `agentic-oss-template` repo from docs/PRD.md. Use MIT license. Do not create fake app code. Focus on an ironclad OSS starter with governance, templates, Dependabot, branchbrief, release-cycle docs, npm scaffold, Astro/Starlight docs scaffold, and Cloudflare Pages guidance. Use atomic commits and return a review pack.
