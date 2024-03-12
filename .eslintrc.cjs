/* eslint-env node */
module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  rules: {
    "vue/component-definition-name-casing": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: [".github/workflows/main.yml"],
};
