const variableDeclarations = require("./rules/variable-declarations");
const cjsImports = require('./rules/cjs-imports')
const cjsExports = require('./rules/cjs-exports')
const functionDeclarations = require('./rules/function-declarations')

module.exports = {
  env: {
    es6: true,
    node: true
  },
  rules: {
    "padding-line-between-statements": [
      "error",
      ...cjsImports,
      ...cjsExports,
      ...variableDeclarations,
      ...functionDeclarations
    ]
  }
};
