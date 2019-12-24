module.exports = {
  getVocsSideBar() {
    return [
      {
        title: 'Introduction',
        collapsable: false,
        children: [['', 'Giới thiệu']],
      },
      {
        title: 'V1 & E1',
        collapsable: false,
        children: [
          '/vocabulary/Vol-1/Unit1',
          '/vocabulary/Vol-1/Unit2',
          '/vocabulary/Vol-1/Unit3',
          '/vocabulary/Vol-1/Unit4',
        ],
      },
    ]
  },
  getGrammarSideBar() {
    return [
      {
        title: 'Introduction Grammar',
        collapsable: false,
        children: [['', 'Giới thiệu tổng quát']],
      },
      {
        title: 'Basic thôi',
        collapsable: false,
        children: ['/grammar/basic/verbs-tenses'],
      },
      {
        title: 'Nang cao nè',
        collapsable: false,
        children: ['/grammar/advanced/test'],
      },
    ]
  },
  getStorySideBar() {
    return [
      {
        title: 'Giới thiệu về truyện chêm',
        collapsable: true,
        children: [['', 'Truyện chêm là con mẹ gì?']],
      },
      {
        title: 'Volum 1 - Elementary',
        collapsable: true,
        children: ['/story/elementary/Vol1-Unit1'],
      },
    ]
  },
}
