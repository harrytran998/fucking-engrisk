const {
  getGrammarSideBar,
  getVocsSideBar,
  getStorySideBar,
  getIdiomSideBar,
} = require('./link/sideBar')

module.exports = {
  title: `Let's go ENGRISK 🦄`,
  description: '💎 are created under fucking pressure',
  plugins: [
    'element-tabs',
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
        updatePopup: {
          message: 'Nội dung mới đã được cập nhật',
          buttonText: 'Refresh lại trang',
        },
      },
    ],
  ],
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  markdown: {
    plugins: {
      'multimd-table': {
        multiline: true,
        rowspan: false,
        headerless: false,
      },
    },
  },
  themeConfig: {
    smoothScroll: true,
    editLinks: false,
    // repo: 'jetaimefrc/fucking-engrisk',
    // repoLabel: 'Vào Github',
    // editLinkText: 'Cải thiện trang này',
    displayAllHeaders: true,
    searchPlaceholder: 'Tìm kiếm...',
    lastUpdated: 'Cập nhật cuối cùng',
    sidebarDepth: 3,
    search: true,
    searchMaxSuggestions: 5,
    algolia: {
      apiKey: '9d04dde5838dbaf6ee31e89678ca6ebc',
      indexName: 'fucking-engrisk',
      appId: 'ZRY8VIHEMJ',
    },
    serviceWorker: true,
    nav: require('./link/nav'),
    sidebar: {
      '/vocabulary/': getVocsSideBar(),
      '/grammar/': getGrammarSideBar(),
      '/story/': getStorySideBar(),
      '/idiom/': getIdiomSideBar(),
    },
  },
}
