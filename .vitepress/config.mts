import { defineConfig } from 'vitepress'

// api update
import { useSidebar } from 'vitepress-openapi'
import spec from '../docs/public/openapi.json' with { type: 'json' }
const sidebar = useSidebar({ spec })

// changelogs update
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'

// link preview update
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  srcDir: 'docs',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  lang: 'en-US',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:title', content: 'screenie Docs' }],
    ['meta', { property: 'og:description', content: 'Documentation page for screenie' }],
    ['meta', { property: 'og:image', content: '/favicon.ico' }],
    ['meta', { property: 'og:url', content: 'https://docs.screenie.host' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'theme-color', content: '#74ebd5' }]
  ],
  title: "screenie Docs",
  description: "Documentation page for screenie",

  vite: {
    optimizeDeps: { 
      exclude: [ 
        '@nolebase/vitepress-plugin-inline-link-preview/client', 
      ], 
    }, 
    ssr: { 
      noExternal: [ 
        '@nolebase/vitepress-plugin-inline-link-preview', 
      ], 
    },
    plugins: [ 
      GitChangelog({ 
        repoURL: () => 'https://github.com/screeniehost/docs',
      }), 
      GitChangelogMarkdownSection({
        sections:  {
          disableContributors: true,
        }
      }), 
    ],
  },

  markdown: { 
    config(md) { 
      md.use(InlineLinkPreviewElementTransform) 
    },
    image: {
      lazyLoading: true
    }
  },

  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contributing', link: '/resources/contribute' }
    ],

    sidebar: [
      {
        text: 'Get Started',
        collapsed: false,
        items: [
          { text: 'What is screenie?', link: '/get-started/what-is-screenie' },
          { text: 'Installation', link: '/get-started/installation' },
          { text: 'Advanced Installation', link: '/get-started/advanced-installation' },
          { text: 'Updating', link: '/get-started/updating' },
          { text: 'Troubleshooting', link: '/get-started/troubleshooting' }
        ]
      },
      {
        text: 'screenie app',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/screenie-app/introduction' },
          { text: 'Configuration', link: '/screenie-app/configuration' },
          { text: 'Creating new endpoints', link: '/screenie-app/create-new-endpoints' },
          { text: 'Adding folders to the checker', link: '/screenie-app/adding-folders-to-checker' },
          { text: 'Knowledge Base',
            collapsed: true,
            items: [
            { text: 'Known Issues', link: '/screenie-app/knowledge-base/known-issues' },
            { text: 'Future Plans', link: '/screenie-app/knowledge-base/future-plans' }
          ]},
          { text: 'API Reference',
            collapsed: true,
            items: [
              { text: 'Introduction', link: '/screenie-app/api/introduction' },
              ...sidebar.generateSidebarGroups ({
                linkPrefix: '/screenie-app/api/operations/',
                sidebarItemTemplate: (method, path) => {
                  const operation = spec.paths[path]?.[method];
                  return `<div class="OASidebarItem group/oaSidebarItem" style="display: grid; grid-template-columns: 1fr auto;">
                  <span class="text" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${operation ? operation.summary : path}</span>
                  <span class="OASidebarItem-badge OAMethodBadge--${method.toLowerCase()}">${method.toUpperCase()}</span>
                </div>`;
                }
            }),
          ]},
        ]
      },
      {
        text: 'Resources',
        collapsed: true,
        items: [
          { text: 'Team', link: '/resources/team' },
          { text: 'Support', link: '/resources/support' },
          { text: 'Sponsoring', link: '/resources/sponsoring' },
          { text: 'Our Sponsors', link: '/resources/our-sponsors' },
          { text: 'Branding', link: '/resources/branding' },
          { text: 'Contribute', link: '/resources/contribute' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/screeniehost' },
      { icon: 'discord', link: 'https://discord.gg/tsRDJTARnS' }
    ],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/screeniehost/docs/edit/main/docs/:path'
    }
  }
})
