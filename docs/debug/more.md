---
title: Calendarios, Horarios y Exámenes
calendario_imagen: "https://www.ull.es/estudios-docencia/wp-content/uploads/sites/7/2022/06/280882943_10158680089571099_2231918960816456383_n.jpg"
google: "https://www.google.com"
chuchu: "hello vitepress!"
testVar: "Una variable"
---
<script setup>
import { PLinfo } from '../plinfo'
</script>

# {{ $frontmatter.title }}

<p>
Using v-text directive: <span v-text="$frontmatter.chuchu"></span>
</p>

<p>Using v-bind directive: <a :href="$frontmatter.google">hello google search engine</a></p>


<a :href="PLinfo.organization.url">
  go to GH Organization <span v-html="PLinfo.organization.name"></span>
</a>

<!-- does not work
<a :href="PLinfo.organization.url">{{PLinfo.organization.name}}</span></a>
-->

<pre style="color: blue">
{{  $frontmatter.testVar }}
</pre>

<!--
<span v-once>This will never change: {{ $frontmatter.msg }}</span>

{{ $frontmatter.chuchu }}
-->

DOES NOT WORK AS A LINK!: [Go to Google]({{ $frontmatter.google }}) but literal text

**This is the table of content:**

[[toc]]

<!--
::: v-pre
A html link <a href="{{ $frontmatter.testVar }}">an html link to google</a>
:::
-->


## Calendario Académico

<pre>
{{ $frontmatter.calendario_imagen }}

https://www.ull.es/estudios-docencia/wp-content/uploads/sites/7/2022/06/280882943_10158680089571099_2231918960816456383_n.jpg
</pre>

