const sidebar = [
  {
    title: "Notes",
    collapsable: false,
    path: "/",
    sdebarDepth: 1,
    children: ["/", "/contributing.md"],
  },
  {
    title: "Introduction",
    path: "/intro/",
    children: ["/intro/what-is-javascript.md", "/intro/getting-started.md"],
  },
];

module.exports = sidebar;
