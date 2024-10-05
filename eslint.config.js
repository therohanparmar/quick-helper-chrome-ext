/** @type {import('eslint').Linter.FlatConfig} */
const config = [
    {
        languageOptions: {
            ecmaVersion: 12,
            sourceType: 'module',
            globals: {
                browser: true, // Set browser global variables
            },
        },
        rules: {
            'no-console': 'warn',
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
        },
        // You can add more configurations here as needed
    },
    {
        files: ['assets/js/**/*.js'], // Specify the files to apply this config to
        // Additional settings for specific file patterns can go here
    },
];

module.exports = config;
