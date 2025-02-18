import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  srcDir: 'docs',
  cleanUrls: true,
  lastUpdated: true,
  lang: 'en-US',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  title: "screenie Docs",
  description: "Documentation page for screenie",
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
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
