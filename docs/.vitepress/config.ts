import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import { nav, sidebarTemas, sidebarConfig } from './navigation-bars'

export default defineConfig({
  lang: 'en-US',
  title: 'DMSI',
  description: 'DMSI site.',
  base: '/vitepress-getting-started/',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: nav(),

    /*
    sidebar: {
      '/temas/': sidebarTemas(),
      '/config/': sidebarConfig()
    },
    */

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ULL-ESIT-DMSI/vitepress-getting-started' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

  },
})

