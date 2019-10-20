module.exports = {
    env:{ browser: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
    ],
    globals: {module: false},
    parser: '@typescript-eslint/parser',
    plugins: [ '@typescript-eslint', 'prettier', 'jsx-a11y', 'react' ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': { typescript: {} },
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": [0],
        "@typescript-eslint/indent": [2, 2],
        "@typescript-eslint/no-use-before-define": [2, { "functions": false }],

        "react/forbid-prop-types": 2,
        "react/prop-types": 0,

        'brace-style': [2, 'allman', { "allowSingleLine": true }],
        "quotes": [2, "single"],
        
        "jsx-a11y/label-has-for": [
            2,
            {
                "components": [
                    "Label"
                ],
                "required": {
                    "some": [
                        "nesting",
                        "id"
                    ]
                },
                "allowChildren": false
            }
        ],
    },
};