const cjsExports = require("./rules/cjs-exports");
const variableDeclarations = require("./rules/variable-declarations");
const cjsImports = require("./rules/cjs-imports");
const functionDeclarations = require("./rules/function-declarations");

const rules = [
  ...cjsExports,
  ...variableDeclarations,
  ...cjsImports,
  ...functionDeclarations,
];

function configure(type) {
  return {
    env: {
      es6: true,
      node: true,
    },
    rules: {
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxBOF: 1,
          maxEOF: 0
        }
      ],
      "padding-line-between-statements": [
        type,
        ...rules
      ],
    }
  };
}

module.exports = {
  configs: {
    warn: configure("warn"),
    error: configure("error"),
  },
};
