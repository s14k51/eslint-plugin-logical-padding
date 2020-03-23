# eslint-plugin-logical-padding

Enforces padding between logical blocks of code. This plugin contains the [padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements) `eslint` rule.

# Usage

In your `.eslintrc`, to report checks as errors

```json
{
  "extends": ["plugin:logical-padding/error"]
}
```

or to report checks as warnings

```json
{
  "extends": ["plugin:logical-padding/warn"]
}
```