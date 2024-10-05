module.exports = {
    env: {
        browser: true, // Enables browser global variables
        es2021: true, // Allows ES2021 features
    },
    extends: [
        'eslint:recommended', // Use recommended rules
    ],
    parserOptions: {
        ecmaVersion: 12, // Specify ECMAScript version
        sourceType: 'module', // Allows using imports
    },
    rules: {
        // Custom rules can be added here
        'no-console': 'warn', // Warns about console.log statements
        'quotes': ['error', 'single'], // Enforce single quotes
        'semi': ['error', 'always'], // Require semicolons
    },
};
