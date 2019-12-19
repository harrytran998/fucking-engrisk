module.exports = {
  title: 'Fuck you ENGRISK',
  description: 'I will kill you man',
  plugins: [
    '@vuepress/medium-zoom',
    'vuepress-plugin-element-tabs',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-154598962-1',
      },
    ],
  ],
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  themeConfig: {
    nav: [
      // {
      //   text: 'Versions',
      //   items: [
      //     {
      //       text: 'Version 3.0.0-beta.x',
      //       link: '/3.0.0-beta.x/',
      //     },
      //     {
      //       text: 'Version 3.0.0-alpha.x',
      //       link: '/3.0.0-alpha.x/',
      //     },
      //   ],
      // },
      // {
      //   text: 'Website',
      //   link: 'https://strapi.io',
      // },
      // {
      //   text: 'Slack',
      //   link: 'https://slack.strapi.io',
      // },
      // {
      //   text: 'Blog',
      //   link: 'https://blog.strapi.io',
      // },
    ],
    repo: 'jetaimefrc/fucking-engrisk',
    docsDir: 'docs',
    algolia: {
      apiKey: '9d04dde5838dbaf6ee31e89678ca6ebc',
      indexName: 'fucking-engrisk',
    },
    editLinks: true,
    editLinkText: 'Improve this page',
    serviceWorker: true,
    sidebarDepth: 1,
    sidebar: {
      '/vocabulary/': [
        {
          collapsable: false,
          title: '🚀 Getting Started',
          children: ['/vocabulary/getting-started/introduction'],
        },
      ],
    },
  },
}
