// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// api docs update
import { theme, useOpenapi } from 'vitepress-openapi/client'
import 'vitepress-openapi/dist/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  async enhanceApp({ app }) {
    const response = await fetch('/openapi.json')
    const spec = await response.json()

    const openapi = useOpenapi({ 
      spec,
      config: { 
      },
    }) 
    theme.enhanceApp({ app, openapi })
  }
} satisfies Theme