const eslintConfig = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'react-app',
    ],
    overrides: [
        {
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            files: [
                '*.ts',
                '*.tsx' 
            ],
            parserOptions: { project: [ './tsconfig.json' ], },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'sort-keys-fix',
        'sort-imports-es6-autofix'
    ],
    rules: {
        '@typescript-eslint/indent': 'error',
        'array-bracket-newline': [
            'error',
            {
                'minItems': 2,
                'multiline': true 
            } 
        ],
        'array-bracket-spacing': [
            'error',
            'always' 
        ],
        'array-element-newline': [
            'error',
            {
                'minItems': 2,
                'multiline': true 
            } 
        ],
        'indent': 'off',
        'jsx-quotes': [
            2,
            'prefer-single'
        ],
        'keyword-spacing': [
            'error',
            {
                'overrides': {
                    'as': { 'after': false },
                    'for': { 'after': false },
                    'if': { 'after': false },
                    'static': { 'after': true },
                    'while': { 'after': false }
                } 
            }
        ],
        'no-unused-vars': [
            'error',
            {
                args: 'after-used',
                ignoreRestSiblings: false,
                vars: 'all',
            },
        ],
        'object-curly-newline': [
            'error',
            {
                'ExportDeclaration': {
                    'minProperties': 3,
                    'multiline': true 
                },
                'ImportDeclaration': {
                    'minProperties': 3,
                    'multiline': true 
                },
                'ObjectExpression': {
                    'minProperties': 3,
                    'multiline': true 
                },
                'ObjectPattern': {
                    'minProperties': 3,
                    'multiline': true 
                }
            }
        ],
        'object-curly-spacing': [
            'error',
            'always' 
        ],
        'object-property-newline': [
            'error',
            { 'allowAllPropertiesOnSameLine': false } 
        ],
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-uses-react': 'off',
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 'off',
        semi: [
            2,
            'never' 
        ],
        'sort-imports-es6-autofix/sort-imports-es6': [
            2,
            {
                'ignoreCase': false,
                'ignoreMemberSort': false,
                'memberSyntaxSortOrder': [
                    'all',
                    'multiple',
                    'single',
                    'none',
                ]
            }
        ],
        'sort-keys': [
            'error',
            'asc',
            {
                'caseSensitive': true,
                'natural': false,
            }
        ],
        'sort-keys-fix/sort-keys-fix': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                asyncArrow: 'never',
                named: 'never',
            },
        ],
        'space-in-parens': [
            'error',
            'never' 
        ],
    },
    settings: {
        react: {
            fragment: 'Fragment',
            pragma: 'React',
            version: 'detect',
        },
    },
}

module.exports = eslintConfig
