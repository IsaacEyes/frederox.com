const biodiversity = [
  { text: "Getting Started", link: "/biodiversity/" },
  { text: "Biomes", link: "/biodiversity/biomes" },
  { text: "Entites", link: "/biodiversity/entities" },
];

const cosmos = [
  {
    text: "Documentation",
    children: [{ text: "Getting Started", link: "/cosmos/setup" }],
  },
  {
    text: "Tests",
    children: [{ text: "Crafting UI", link: "/cosmos/tests/crafting" }],
  },
  {
    text: "Items",
    children: [{ text: "Titanium Ore", link: "/cosmos/items/titanium" }],
  },
];

module.exports = {
  title: "Frederox",
  description: "",
  base: "/",

  themeConfig: {
    repo: "frederoxGit/frederox.com",
    docsDir: "docs",

    editLinks: true,
    editLinkText: "Edit this page on GitHub",

    lastUpdated: "Last Updated",

    nav: [
      { text: "Cosmos", link: "/cosmos/" },
      { text: "Biodiversity", link: "/biodiversity/" },
    ],
    sidebar: {
      "/biodiversity/": biodiversity,
      "/cosmos/": cosmos,
    },
  },
};
