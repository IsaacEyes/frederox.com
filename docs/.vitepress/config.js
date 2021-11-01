const biodiversity = [
  { text: "Getting Started", link: "/biodiversity/" },
  { text: "Biomes", link: "/biodiversity/biomes" },
  { text: "Entites", link: "/biodiversity/entities" },
];

const cosmos = [
  { text: "Getting Started", link: "/cosmos/" },
  { text: "Block Recipes", link: "/cosmos/block-recipes" },
  { text: "Item Recipes", link: "/cosmos/item-recipes" },
  { text: "Rocket Recipes", link: "/cosmos/rocket-recipes" },
  { text: "The Moon", link: "/cosmos/moon" },
  { text: "Mars", link: "/cosmos/mars" },
];

module.exports = {
  title: "Frederox",
  description: "",

  themeConfig: {
    repo: "frederoxGit/frederox.com",
    docsDir: "docs",

    editLinks: true,
    editLinkText: "Edit this page on GitHub",

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
