module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      configFile: "./babel.config.js",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    "jest/globals": true,
  },
  plugins: ["prettier", "jest"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    semi: "off",
    quotes: "off",
    "prettier/prettier": "off",
  },
};
