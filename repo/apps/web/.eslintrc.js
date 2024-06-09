module.exports = {
  ...require("@repo/config/eslint-next"),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
