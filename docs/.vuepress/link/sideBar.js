module.exports = {
  getVocsSideBar() {
    return [
      {
        title: 'Introduction',
        children: [['', 'Giới thiệu']],
      },
      {
        title: '13 Topics trong TOEIC',
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '13-topics-TOEIC/offices',
          '13-topics-TOEIC/general-business',
          '13-topics-TOEIC/technical-areas',
          '13-topics-TOEIC/travel',
          '13-topics-TOEIC/entertainment',
          '13-topics-TOEIC/purchasing',
          '13-topics-TOEIC/dining-out',
          '13-topics-TOEIC/personel',
          '13-topics-TOEIC/finance-budgeting',
          '13-topics-TOEIC/corporate-development',
          '13-topics-TOEIC/manufactoring',
          '13-topics-TOEIC/housing-property',
          '13-topics-TOEIC/health',
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
        children: ['/grammar/a1/noun', '/grammar/a1/adverb'],
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
