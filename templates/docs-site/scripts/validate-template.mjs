import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFile(path.join(root, file), 'utf8');

const pkg = JSON.parse(await read('package.json'));
assert.equal(pkg.name, 'docs-site');
assert.equal(pkg.private, true);
assert.equal(pkg.type, 'module');
assert.equal(pkg.scripts.validate, 'node scripts/validate-template.mjs');
for (const script of ['dev', 'build', 'preview']) assert.ok(pkg.scripts[script], `missing ${script} script`);
assert.ok(pkg.dependencies.astro, 'Astro dependency is required');
assert.ok(pkg.dependencies['@astrojs/starlight'], 'Starlight dependency is required');

const config = await read('astro.config.mjs');
for (const marker of ["from 'astro/config'", "from '@astrojs/starlight'", "starlight({", "title: '{{PROJECT_NAME}} Docs'", "href: '{{REPOSITORY_URL}}'"]) {
  assert.ok(config.includes(marker), `astro.config.mjs missing ${marker}`);
}

const contentConfig = await read('src/content.config.ts');
assert.ok(contentConfig.includes('docsLoader()'), 'content collection must use the Starlight docs loader');
assert.ok(contentConfig.includes('docsSchema()'), 'content collection must use the Starlight docs schema');
for (const page of ['index.mdx', 'getting-started.mdx', 'contributing.mdx']) {
  const content = await read(`src/content/docs/${page}`);
  assert.ok(content.trim(), `${page} must not be empty`);
  assert.match(content, /^---\r?\n[\s\S]*?^---\r?\n/m, `${page} must have frontmatter`);
}
console.log('docs-site template validation passed');
