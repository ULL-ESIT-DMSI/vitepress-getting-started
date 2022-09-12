---
mivar: 4
---
# Temas

[mode debs](more)

* [Presentación](/temas/tema0-presentacion/)
* [Introducción](/temas/tema1-introduccion/)

<ol>
<li v-for="i in 3">Tema {{ i }}</li>
</ol>

<script setup>
import { useData } from 'vitepress'

const { site, page } = useData()

import { PLinfo } from '../plinfo'

import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
   {
    avatar: 'https://avatars.githubusercontent.com/u/1142554?v=4',
    name: 'Casiano',
    title: 'Teacher',
    links: [
      { icon: 'github', link: 'https://github.com/crguezl' },
      { icon: 'twitter', link: 'https://twitter.com/crguezl' }
    ]
  },
 
]

</script>

the api of useData is in <https://vitepress.vuejs.org/guide/api.html>



# Our Team

See <https://vitepress.vuejs.org/guide/theme-team-page#show-team-members-in-a-page>

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />

## Frontmatter mivar

mivar: {{ $frontmatter.mivar }}


## PLinfo

<pre>
{{ PLinfo }}
</pre>

### Importing components in markdown

If your components are going to be used in only a few places, the recommended way to use them is to importing the components in the file where it is used.

```md
<script setup>
import CustomComponent from '../components/CustomComponent.vue'
</script>

This is a .md using a custom component

<CustomComponent />
```

## Page 

<pre>
{{ page }}
</pre>

## Site 

<pre>
{{ site }}
</pre>
