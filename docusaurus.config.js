// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nblocks Documentation",
  tagline: "For developer by developers",
  url: "https://docs.nblocks.dev",
  baseUrl: "/nblocks-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nebulr-group", // Usually your GitHub org/user name.
  projectName: "nblocks-docs", // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsed: false,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "G-FP4F30X25W",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Home",
        logo: {
          alt: "Nblocks Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "essentials/quickstart",
            position: "left",
            label: "Essentials",
          },
          {
            type: "doc",
            docId: "tutorials/querying-first-data",
            position: "left",
            label: "Guides & Examples",
          },
          {
            type: "doc",
            docId: "concepts/branding",
            position: "left",
            label: "Concepts",
          },
          {
            href: "https://nebulr-group.github.io/nblocks-api-docs",
            position: "left",
            label: "API Reference",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/nebulr-group",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Quickstart",
                to: "/docs/essentials/quickstart",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/nblocks",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/nebulr-group",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Nblocks. A Nebulr product. All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
