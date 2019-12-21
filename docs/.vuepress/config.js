const { getGrammarSideBar, getVocsSideBar, getStorySideBar } = require('./link/sideBar')

module.exports = {
  title: `Let's go ENGRISK 🦄`,
  description: '💎 are created under fucking pressure',
  plugins: [
    '@vuepress/medium-zoom',
    'vuepress-plugin-element-tabs',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-154598962-1',
      },
    ],
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.my-wrapper .my-img',
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },
    ],
  ],
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  themeConfig: {
    editLinks: true,
    smoothScroll: true,
    repo: 'jetaimefrc/fucking-engrisk',
    repoLabel: 'Vào Github',
    displayAllHeaders: true,
    searchPlaceholder: 'Tìm kiếm...',
    lastUpdated: 'Cập nhật cuối cùng',
    sidebarDepth: 2, // => Cho phép H2 & H3
    algolia: {
      apiKey: '9d04dde5838dbaf6ee31e89678ca6ebc',
      indexName: 'fucking-engrisk',
    },
    editLinkText: 'Cải thiện trang này',
    serviceWorker: true,
    nav: require('./link/nav'),
    sidebar: {
      '/vocabulary/': getVocsSideBar(),
      '/grammar/': getGrammarSideBar(),
      '/story/': getStorySideBar(),
    },
  },
}
