const sidebar = [
  {
    title: "Home",
    collapsable: false,
    path: "/",
    sidebarDepth: 1,
    children: ["/contributing"],
  },
  {
    title: "Notes",
    collapsable: false,
    path: "/notes/",
    sidebarDepth: 8,
    children: [
      {
        title: "Introduction",
        collapsable: true,
        path: "/notes/intro/what-is-javascript",
        sidebarDepth: 8,
        children: [
          "/notes/intro/what-is-javascript",
          {
            title: "Getting Started",
            sidebarDepth: 8,
            collapsable: false,
            path: "/notes/intro/getting-started/node",
            children: [
              "/notes/intro/getting-started/node",
              "/notes/intro/getting-started/essentials",
              "/notes/intro/getting-started/npm",
              "/notes/intro/getting-started/linters",
            ],
          },
        ],
      },
    ],
  },
];

module.exports = sidebar;
