import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "www.zhangjiluo.com",
  description: "www.zhangjiluo.com 技术站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
  },
  lastUpdated: true,
});
