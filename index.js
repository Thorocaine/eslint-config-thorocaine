module.exports = {
    env:{ browser: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [ '@typescript-eslint', 'prettier', 'jsx-a11y', 'react' ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': { typescript: {} },
    },
    rules: {
        'brace-style': [2, 'allman', { "allowSingleLine": true }],
        'quotes': [2, 'single'],
        'react/forbid-prop-types': 2,
        'react/prop-types': 0,
    },
};