/** @type {import('eslint').Linter.Config} */
const config = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'no-console': 'warn',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
    },
};

module.exports = config;
