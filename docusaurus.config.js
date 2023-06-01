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
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",
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
          //sidebarCollapsed: false,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
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
        logo: {
          alt: "Nblocks Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://nebulr-group.github.io/nblocks-api-docs",
            position: "left",
            label: "API Reference",
          },
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
                label: "What is Nblocks?",
                to: "/docs/getting-started/what-is-nblocks",
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
            ],
          },
          {
            title: "More",
            items: [
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
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
