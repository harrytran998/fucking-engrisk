export function getVocsSideBar() {
  return ['', '']
}

export function getGrammarSideBar(basic, advanced) {
  return [
    {
      title: basic,
      collapsable: false,
      children: [''],
    },
    {
      title: advanced,
      collapsable: false,
      children: ['', 'permalinks', 'markdown-slot', 'global-computed'],
    },
  ]
}
