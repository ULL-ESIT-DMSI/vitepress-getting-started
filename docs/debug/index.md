---
mivar: 4
---
# Temas

* [Presentación](/temas/tema0-presentacion/)
* [Introducción](/temas/tema1-introduccion/)

<ol>
<li v-for="i in 3">Tema {{ i }}</li>
</ol>

<script setup>
import { useData } from 'vitepress'

const { site, page } = useData()

import { PLinfo } from '../plinfo'

</script>

the api of useData is in <https://vitepress.vuejs.org/guide/api.html>


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
