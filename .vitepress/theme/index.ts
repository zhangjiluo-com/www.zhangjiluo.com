import type { Theme } from "vitepress";
import Layout from "./Layout.vue";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
