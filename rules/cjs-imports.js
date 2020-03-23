module.exports = [
  {
    blankLine: "always",
    prev: "cjs-import",
    next: "*"
  },
  {
    blankLine: "never",
    prev: "cjs-import",
    next: "cjs-import"
  }
];
