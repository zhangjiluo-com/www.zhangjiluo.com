<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Article from "./layouts/article.vue";
const { site, frontmatter } = useData();

const s = useData();
console.log("site", s);
</script>

<template>
  <!-- <Article /> -->
  <!-- <template v-if="frontmatter.layout === 'c'">
    <div class="">111</div>
  </template> -->
  <DefaultTheme.Layout> </DefaultTheme.Layout>
</template>
