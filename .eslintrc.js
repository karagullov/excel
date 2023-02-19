module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      configFile: "./babel.config.json",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
  rules: {
    semi: "off",
    quotes: "off",
    "prettier/prettier": "prettier/prettier",
  },
};
