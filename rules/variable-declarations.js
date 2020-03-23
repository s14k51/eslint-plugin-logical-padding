module.exports = [
  {
    blankLine: "always",
    prev: ["const", "let", "var"],
    next: "*"
  },
  {
    blankLine: "never",
    prev: ["const", "let", "var"],
    next: ["const", "let", "var"]
  },
];
