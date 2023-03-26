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
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint' 
    ],
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
        'array-element-newline': [
            'error',
            {
                'multiline': true,
                'minItems': 2 
            } 
        ],
        'array-bracket-newline': [
            'error',
            {
                'multiline': true,
                'minItems': 2 
            } 
        ],
        'object-property-newline': [
            'error',
            { 'allowAllPropertiesOnSameLine': false } 
        ],
        'object-curly-newline': [
            'error',
            {
                'ObjectExpression': {
                    'multiline': true,
                    'minProperties': 3 
                },
                'ObjectPattern': {
                    'multiline': true,
                    'minProperties': 3 
                },
                'ImportDeclaration': {
                    'multiline': true,
                    'minProperties': 3 
                },
                'ExportDeclaration': {
                    'multiline': true,
                    'minProperties': 3 
                }
            }
        ],
        semi: [
            2,
            'never' 
        ],
        'indent': 'off',
        'quotes': [
            'error',
            'single' 
        ],
        '@typescript-eslint/indent': 'error',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/prop-types': 2,
        'object-curly-spacing': [
            'error',
            'always' 
        ],
        'array-bracket-spacing': [
            'error',
            'always' 
        ],
        'space-in-parens': [
            'error',
            'never' 
        ],
        'keyword-spacing': [
            'error',
            {
                'overrides': {
                    'if': { 'after': false },
                    'for': { 'after': false },
                    'while': { 'after': false },
                    'static': { 'after': false },
                    'as': { 'after': false }
                } 
            }
        ]
    },
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: [
                '*.ts',
                '*.tsx' 
            ],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: { project: [ './tsconfig.json' ], },
        },
    ],
}

module.exports = eslintConfig
