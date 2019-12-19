module.exports = {
  disableEmoji: false,
  list: ['feat', 'fix', 'chore', 'perf', 'ci', 'refactor', 'release', 'test'],
  questions: ['type', 'subject'], // 'scope', 'issues', 'lerna', 'body', 'breaking'
  scopes: [], // Temporary Ignoring!
  types: {
    feat: {
      description: 'A new feature',
      emoji: '🎸 ',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      emoji: '🐛 ',
      value: 'fix',
    },
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '🤖 ',
      value: 'chore',
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '⚡️ ',
      value: 'perf',
    },
    ci: {
      description: 'CI related changes',
      emoji: '🎡 ',
      value: 'ci',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '💡 ',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹 ',
      value: 'release',
    },
    test: {
      description: 'Adding missing tests',
      emoji: '💍 ',
      value: 'test',
    },
  },
}
