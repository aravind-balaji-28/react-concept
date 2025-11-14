module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    // uncomment and adjust if you want type-aware rules (requires tsconfig.json)
    // project: "./tsconfig.json",
  },
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // for React projects use:
    // "plugin:react/recommended",
    // "plugin:react-hooks/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking" // needs parserOptions.project
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
  ignorePatterns: ['dist/', 'build/', 'node_modules/'],
};
