export function nav() {
  return [
    { text: 'Debug Vuepress', link: '/debug/' },
    { 
      text: 'Temas', 
      items: [
        {
          text: 'Tema 0: Presentación',
          link: '/temas/tema0-presentacion/'
        },
        {
          text: 'Tema 1: Introducción',
          link: '/temas/tema1-introduccion/'
        },
      ],
    },
    { 
      text: 'Labs',  
      items: [
        {
          text: 'GitHub Campus Expert',
          link: '/practicas/gh-campus-expert'
        },
        {
          text: 'Learn Markdown',
          link: '/practicas/markdown'
        },
        {
          text: 'The Life Cycle',
          link: '/practicas/life-cycle'
        },


      ]
    },
    { text: "Recursos",
      items: [
        {
          text: 'Recursos ULL',
          link: 'recursos.html#recursos-ull'
        },
        {
          text: 'Recursos GitHub',
          link: 'recursos.html#recursos-github'
        },
      ]
    },
    { 
      text: "Horarios",
      items: [
        {
          text: "Google Calendar",
          link: "https://github.com/ULL-ESIT-DMSI-2223"
        },
        {
          text: "Calendario de Exámenes",
          link: "https://github.com/ULL-ESIT-DMSI-2223"
        },
        {
          text: "Horario de tutorías",
          link: "https://github.com/ULL-ESIT-DMSI-2223"
        },
        {
          text: "Calendario Académico",
          link: "https://github.com/ULL-ESIT-DMSI-2223"
        }
      ]
  },
    {
      text: "GitHub",
      items: [
        {
          text: 'Organization',
          link: 'https://github.com/ULL-ESIT-DMSI-2223'
        },
        {
          text: 'Teams',
          link: 'https://github.com/orgs/ULL-ESIT-DMSI-2223/teams'
        },
        {
          text: 'Classroom',
          link: 'https://classroom.github.com/classrooms/108465062-ull-esit-dmsi-2223'
        },
        {
          text: 'Apuntes repo',
          link: 'https://github.com/ULL-ESIT-DMSI-2223/ull-esit-dmsi-2223.github.io',
        }
      ]
    },
    {
      text: "Campus Virtual",
      items: [
        {
          text: 'Aula Virtual de DMSI',
          link: 'https://campusingenieriaytecnologia2223.ull.es/mod/assign/index.php?id=2223090033'
        },
        {
          text: 'Guía Docente',
          link: 'https://www.ull.es/apps/guias/guias/view_guide_course/2223/139264413'
        },
        {
          text: 'Casiano',
          link: 'https://www.ull.es/apps/guias/guias/view_teacher_niu/967/crguezl/'
        },
        {
          text: 'Participantes',
          link: 'https://campusingenieriaytecnologia2223.ull.es/user/index.php?id=2223090033'
        },
        {
          text: 'Tareas',
          link:"https://campusingenieriaytecnologia2223.ull.es/mod/assign/index.php?id=2223090033"
        }
      ]
    }
  ]
}

export function sidebarTemas() {
  return [
    {
      text: 'Temas',
      collapsible: true,
      items: [
        { text: 'Tema 0: Presentación', link: '/temas/tema0-presentacion/index.html' },
        { text: 'Asset Handling', link: '/temas/asset-handling' },
        { text: 'Frontmatter', link: '/temas/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/temas/using-vue' },
        { text: 'API Reference', link: '/temas/api' }
      ]
    },
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is VitePress?', link: '/temas/what-is-vitepress' },
        { text: 'Getting Started', link: '/temas/getting-started' },
        { text: 'Configuration', link: '/temas/configuration' },
        { text: 'Deploying', link: '/temas/deploying' }
      ]
    },
  ]
}

export function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
      ]
    }
  ]
}