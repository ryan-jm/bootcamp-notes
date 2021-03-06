const { description } = require("../../package");
const sidebar = require("./sidebar");

module.exports = {
  title: "JavaScript Notes",
  base: "/bootcamp-notes/",
  description: description,
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  theme: "default-prefers-color-scheme",
  themeConfig: {
    logo: "https://i.ibb.co/SXMpDj5/logo.png",
    repo: "https://github.com/sanctumlysis/bootcamp-notes",
    darkMode: true,
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Notes",
        link: "/notes/",
      },
      {
        text: "MDN Docs",
        link: "https://mdn.dev",
      },
    ],
    sidebar,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
