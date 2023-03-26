const eslintConfig = {
    env: {
        browser: true,
        es2021: true,
    },
    settings: {
        react: {
            pragma: 'React',
            fragment: 'Fragment',
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'react-app',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
            },
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'never',
            },
        ],
        'array-element-newline': ['error', 'consistent'],
        'array-bracket-newline': ['error', 'consistent'],
        semi: [2, 'never'],
        "indent": "off",
        "@typescript-eslint/indent": "error"
    },
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['*.ts', '*.tsx'],

            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],

            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
    ],
}

module.exports = eslintConfig
