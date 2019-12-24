module.exports = {
  getVocsSideBar() {
    return [
      {
        title: 'Introduction',
        collapsable: true,
        children: [['', 'Giới thiệu']],
      },
      {
        title: 'V1 & E1',
        collapsable: true,
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
        collapsable: true,
        children: [['', 'Giới thiệu tổng quát']],
      },
      {
        title: 'Basic thôi',
        collapsable: true,
        children: ['/grammar/basic/verbs-tenses'],
      },
      {
        title: 'Nang cao nè',
        collapsable: true,
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
  getIdiomSideBar() {
    return [
      {
        title: 'Giới thiệu về Idiom',
        collapsable: true,
        children: [['', 'Idiom là ca dao, tục ngữ?']],
      },
      {
        title: 'Idioms',
        collapsable: true,
        children: ['/idiom/Part1'],
      },
    ]
  },
}
