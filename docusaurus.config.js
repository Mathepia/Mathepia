// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mathepia Ecosystem', //网站名字
  tagline: 'Mathematical Epidemiology and Deep Learning, Python and Julia',
  url: 'https://Mathepia.github.io/', // 基准网站
  baseUrl: '/Mathepia/', //网站子名字
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mathepia.ico', // 浏览器tab网站logo
  organizationName: 'Mathepia', // Usually your GitHub org/user name.
  projectName: 'Mathepia', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Mathepia/Mathepia',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Mathepia/Mathepia',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ If you like Mathepia, don't hesitate to <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mathepia/Mathepia.jl">star us</a>`,
      },
      navbar: {
        title: 'Mathepia',
        logo: {
          alt: 'Mathepia Logo',
          src: 'img/avatar.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documents',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            label: 'Mathepia',
            href: 'https://github.com/Mathepia',
          },
          {
            label: 'awesome-sciml',
            href: 'https://mathepia.github.io/awesome-sciml/',
          },
          {
            label: 'Mathepia Programs',
            href: 'https://mathepia.github.io/MathepiaPrograms/',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Collections',
            items: [
              {
                label: 'Documents',
                to: '/docs/intro',
              },
              {
                href: 'https://github.com/Mathepia/awesome-sciml',
                label: 'Resources',
              }, {
                label: 'MathepiaPrograms',
                href: 'https://github.com/Mathepia/MathepiaPrograms',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Mathepia Organizations',
                href: 'https://github.com/Mathepia',
              },
              {
                label: 'XJTUAI4Science Group',
                href: 'https://github.com/XJTUAI4Science',
              },
              {
                label: 'Mathepia Packages Systems',
                href: 'https://github.com/Mathepia/Mathepia.jl',
              },
              {
                label: 'JuliaEpi Organizations',
                href: 'https://github.com/JuliaEpi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Pengfei Website',
                href: 'https://song921012.github.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Song921012',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mathepia, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
