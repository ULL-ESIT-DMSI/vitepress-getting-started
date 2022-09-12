---
title: Calendarios, Horarios y Exámenes
calendario_imagen: "https://www.ull.es/estudios-docencia/wp-content/uploads/sites/7/2022/06/280882943_10158680089571099_2231918960816456383_n.jpg"
google: "https://www.google.com"
chuchu: "hello vitepress!"
testVar: "Una variable"
---
<script setup>
import { PLinfo } from './plinfo'
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

## Horario

<iframe 
src="https://calendar.google.com/calendar/b/2/embed?mode=WEEK&amp;height=500&amp;wkst=2&amp;hl=es&amp;bgcolor=%23cc33cc&amp;src=ull.edu.es_8hcqtfr5u2h3o1v2smnmcqqu50%40group.calendar.google.com&amp;color=%238C500B&amp;ctz=Atlantic%2FCanary" 
style="border-width:0" 
width="600" 
height="500" 
frameborder="0" 
scrolling="yes">
</iframe>

## Calendario Académico

<pre>
{{ $frontmatter.calendario_imagen }}

https://www.ull.es/estudios-docencia/wp-content/uploads/sites/7/2022/06/280882943_10158680089571099_2231918960816456383_n.jpg
</pre>

[![Calendario Académico](https://www.ull.es/estudios-docencia/wp-content/uploads/sites/7/2022/06/280882943_10158680089571099_2231918960816456383_n.jpg)](https://www.ull.es/estudios-docencia/calendario-academico/)

## Exámenes

* [![](/assets/images/examenes-dmsi.png)](https://www.ull.es/grados/ingenieria-informatica/informacion-academica/horarios-y-calendario-examenes/) 


## Logos

![](/assets/images/logo-ull.png)


![](/assets/images/logo-ull.jpg)
