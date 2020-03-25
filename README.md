# [eslint-plugin-logical-padding](https://www.npmjs.com/package/eslint-plugin-logical-padding)

Enforces padding between logical blocks of code. Inspired by [rubystyle.guide](https://rubystyle.guide/#empty-lines-between-methods).

# Installation

```bash
npm install --save-dev eslint-plugin-logical-padding
```

or 

```bash
yarn add -D eslint-plugin-logical-padding
```

# Usage

In your `.eslintrc`, to report rules as errors

```json
{
  "extends": ["plugin:logical-padding/error"]
}
```

or to report rules as warnings

```json
{
  "extends": ["plugin:logical-padding/warn"]
}
```