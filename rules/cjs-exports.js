module.exports = [
  {
    blankLine: "always",
    prev: "cjs-export",
    next: "*"
  },
  {
    blankLine: "never",
    prev: "cjs-export",
    next: "cjs-export"
  }
];
