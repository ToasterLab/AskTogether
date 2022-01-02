module.exports = {
  extends: [
    `react-app`,
    `plugin:sonarjs/recommended`,
    `plugin:unicorn/recommended`,
    `plugin:react-hooks/recommended`,
    `plugin:@next/next/recommended`,
  ],
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: `@typescript-eslint/parser`,
  plugins: [
    `sonarjs`,
    `sort-keys-fix`,
    `react-hooks`,
    `unicorn`,
  ],
  rules: {
    "comma-dangle": [
      `warn`,
      `always-multiline`,
    ],
    "jsx-a11y/accessible-emoji": `off`,
    "jsx-a11y/anchor-is-valid": `off`,
    "prefer-const": `warn`,
    quotes: [
      `error`,
      `backtick`,
    ],
    semi: [
      `warn`,
      `never`,
    ],
    "sonarjs/no-nested-template-literals": `off`,
    "sort-keys-fix/sort-keys-fix": `warn`,
    "unicorn/filename-case": `off`,
    "unicorn/no-null": 0,
    "unicorn/prefer-module": [
      `off`,
    ],
    "unicorn/prevent-abbreviations": [
      `off`,
    ],
  },
}