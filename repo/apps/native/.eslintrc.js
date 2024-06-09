module.exports = {
  ...require('@repo/config/eslint-native'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
