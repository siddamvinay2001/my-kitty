module.exports = {
  ...require("@repo/config/eslint-backend"),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
