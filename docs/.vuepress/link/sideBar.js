module.exports = {
  getVocsSideBar() {
    return [
      {
        title: 'Introduction',
        children: [['', 'Giới thiệu']],
      },
      {
        title: '13 Topics trong TOEIC',
        children: [
          '/vocabulary/13-topics-TOEIC/offices',
          '/vocabulary/13-topics-TOEIC/general-business',
          '/vocabulary/13-topics-TOEIC/technical-areas',
          '/vocabulary/13-topics-TOEIC/travel',
          '/vocabulary/13-topics-TOEIC/entertainment',
          '/vocabulary/13-topics-TOEIC/purchasing',
          '/vocabulary/13-topics-TOEIC/dining-out',
          '/vocabulary/13-topics-TOEIC/personel',
          '/vocabulary/13-topics-TOEIC/finance-budgeting',
          '/vocabulary/13-topics-TOEIC/corporate-development',
          '/vocabulary/13-topics-TOEIC/manufactoring',
          '/vocabulary/13-topics-TOEIC/housing-property',
          '/vocabulary/13-topics-TOEIC/health',
        ],
      },
    ]
  },
  getGrammarSideBar() {
    return [
      {
        title: 'Introduction Grammar',
        children: [['', 'Giới thiệu tổng quát']],
      },
      {
        title: 'A1',
        children: ['/grammar/a1/noun'],
      },
      {
        title: 'A2',
        children: ['/grammar/a2/regular-nouns'],
      },
      {
        title: 'B1',
        children: ['/grammar/b1/reflexive-pronouns'],
      },
      {
        title: 'B2',
        children: ['/grammar/b2/conjunctions'],
      },
      {
        title: 'C1',
        children: ['/grammar/c1/wishes'],
      },
      {
        title: 'C2',
        children: ['/grammar/c2/exclamator-sentence'],
      },
    ]
  },
  getStorySideBar() {
    return [
      {
        title: 'Giới thiệu về truyện chêm',
        children: [['', 'Truyện chêm là con mẹ gì?']],
      },
      {
        title: '13 Topics trong TOEIC',
        children: ['/story/13-topics-TOEIC/offices'],
      },
    ]
  },
  getIdiomSideBar() {
    return [
      {
        title: 'Giới thiệu về Idiom',
        children: [['', 'Idiom là ca dao, tục ngữ?']],
      },
      {
        title: 'Idioms',
        children: ['/idiom/Part1'],
      },
    ]
  },
}
