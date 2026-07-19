// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vitae',
  tagline: 'Your health history, always with you',
  favicon: 'uploads/vitae-logo.png',

  future: {
    v4: true,
  },

  url: 'https://vitae.mrbt-software.com',
  baseUrl: '/',
  organizationName: 'themaristheory',
  projectName: 'vitae',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  plugins: ['docusaurus-plugin-image-zoom'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR', 'de'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en'},
      'pt-BR': {label: 'Português (Brasil)', htmlLang: 'pt-BR'},
      de: {label: 'Deutsch', htmlLang: 'de'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'guide',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Vitae',
        logo: {
          alt: 'Vitae',
          src: 'uploads/vitae-logo.png',
          href: '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guideSidebar',
            position: 'left',
            label: 'Guide',
          },
          {
            href: 'https://vitaeapp.userjot.com/?cursor=1&order=top&limit=10',
            label: 'Support',
            position: 'left',
          },
          {
            type: 'custom-localeLegalDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'mrbt.software@gmail.com',
                href: 'mailto:mrbt.software@gmail.com',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Vitae. Your health, your data, your story.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgba(240, 237, 230, 0.95)',  // your oatmeal tone
          dark: 'rgb(30, 30, 30)',
        },
      },
    }),
};

export default config;
