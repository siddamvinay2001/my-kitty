module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'defect', 'improv']],
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-full-stop': [2, 'never', '.'],
    'header-pattern': [
      2,
      'always',
      /^(feat|defect|improv)\/(kitty_\d+|defect_\d+|stry_\d+)\s:\s.*/,
    ],
  },
};
