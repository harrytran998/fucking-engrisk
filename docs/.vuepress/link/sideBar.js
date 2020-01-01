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
          '/vocabulary/13-topics-TOEIC/offices/Unit1',
          '/vocabulary/13-topics-TOEIC/general-business/Unit1',
          '/vocabulary/13-topics-TOEIC/technical-areas/Unit1',
          '/vocabulary/13-topics-TOEIC/travel/Unit1',
          '/vocabulary/13-topics-TOEIC/entertainment/Unit1',
          '/vocabulary/13-topics-TOEIC/purchasing/Unit1',
          '/vocabulary/13-topics-TOEIC/dining-out/Unit1',
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
        children: ['/grammar/a1/nouns'],
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
        title: 'Volum 1 - Elementary',
        children: ['/story/elementary/Vol1-Unit1'],
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
