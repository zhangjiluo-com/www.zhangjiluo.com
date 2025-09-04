<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
console.log("site", site);
</script>

<template>
  <DefaultTheme.Layout>
    <div class="">123123</div>
    <!-- <div v-if="frontmatter.home">
      <h1>{{ site.title }}</h1>
      <p>{{ site.description }}</p>
      <ul>
        <li><a href="/markdown-examples.html">Markdown Examples</a></li>
        <li><a href="/api-examples.html">API Examples</a></li>
      </ul>
    </div>
    <div v-else>
      <a href="/">Home</a>
    </div> -->
    <Content />
  </DefaultTheme.Layout>
</template>
