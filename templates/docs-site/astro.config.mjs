import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // Replace this with the production docs origin before deploying.
  site: 'https://example.com',
  integrations: [
    starlight({
      title: '{{PROJECT_NAME}} Docs',
      // The docs collection below provides the custom 404 page.
      disable404Route: true,
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: '{{REPOSITORY_URL}}'
        }
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Overview', slug: 'index' },
            { label: 'Getting Started', slug: 'getting-started' },
            { label: 'Contributing', slug: 'contributing' }
          ]
        }
      ]
    })
  ]
});
