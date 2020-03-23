const variableDeclarations = require("./rules/variable-declarations");
const cjsImports = require('./rules/cjs-imports');
const cjsExports = require('./rules/cjs-exports');
const functionDeclarations = require('./rules/function-declarations');

const rules = [
  ...cjsImports,
  ...cjsExports,
  ...variableDeclarations,
  ...functionDeclarations
];

function configure(type) {
  return {
    env: {
      es6: true,
      node: true
    },
    rules: {
      "padding-line-between-statements": [
        type,
        ...rules
      ]
    }
  };
}

module.exports = {
  configs: {
    warn: configure("warn"),
    error: configure("error")
  }
};
