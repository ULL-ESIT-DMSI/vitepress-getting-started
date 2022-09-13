import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import { nav, sidebarTemas, sidebarConfig } from './navigation-bars'
//import * as path from 'path'
//const includesPath = path.join(__dirname, '..');
//console.error(includesPath);

export default defineConfig({
  lang: 'en-US',
  title: 'DMSI',
  description: 'DMSI site.',
  base: '/vitepress-getting-started/',

  srcExclude: [ ], 
  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  markdown: {
    headers: {
      level: [0, 0]
    },
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    /*
    anchor: {
      permalink: anchor.permalink.headerLink()
    },
    */
    // options for @mdit-vue/plugin-toc
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    // toc: { level: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins!
      // See https://github.com/vuejs/vuepress/issues/222#issuecomment-874001675
      /*
        md.use(
          require('markdown-it-include'), 
            {
              root: includesPath,
              // bracesAreOptional: true,
              // includeRe: /\!{3}\s*include(.+?)\!{3}/i
            }
        )
      */
    }
  },

  themeConfig: {
    nav: nav(),

    /*
    sidebar: {
      '/temas/': sidebarTemas(),
      '/config/': sidebarConfig()
    },
    export default {
  themeConfig: {
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/guide/': [
        {
          text: 'Guide',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Index', link: '/guide/' }, // /guide/index.md
            { text: 'One', link: '/guide/one' }, // /guide/one.md
            { text: 'Two', link: '/guide/two' } // /guide/two.md
          ]
        }
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
      '/config/': [
        {
          text: 'Config',
          items: [
            // This shows `/config/index.md` page.
            { text: 'Index', link: '/config/' }, // /config/index.md
            { text: 'Three', link: '/config/three' }, // /config/three.md
            { text: 'Four', link: '/config/four' } // /config/four.md
          ]
        }
      ]
    }
  }
}

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
      copyright: 'Copyright © 2019-present Casiano Rodríguez-León'
    },

  },
})

