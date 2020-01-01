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
        title: 'A1',
        collapsable: true,
        children: ['/grammar/a1/nouns'],
      },
      {
        title: 'A2',
        collapsable: true,
        children: ['/grammar/a2/regular-nouns'],
      },
      {
        title: 'B1',
        collapsable: true,
        children: ['/grammar/b1/reflexive-pronouns'],
      },
      {
        title: 'B2',
        collapsable: true,
        children: ['/grammar/b2/conjunctions'],
      },
      {
        title: 'C1',
        collapsable: true,
        children: ['/grammar/c1/wishes'],
      },
      {
        title: 'C2',
        collapsable: true,
        children: ['/grammar/c2/exclamator-sentence'],
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
