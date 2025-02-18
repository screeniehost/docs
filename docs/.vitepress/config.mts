import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  lastUpdated: true,
  lang: 'en-US',
  head: [['link', { rel: 'icon', href: '/assets/favicon.png' }]],
  title: "screenie Docs",
  description: "Documentation page for screenie",
  themeConfig: {
    logo: '/assets/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/screeniehost' },
      { icon: 'discord', link: 'https://discord.gg/tsRDJTARnS' }
    ],
    search: {
      provider: 'local'
    }
  }
})
