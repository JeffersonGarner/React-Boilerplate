const rules = {
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
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [
        'error',
        { 'max': 1 }
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
    'quotes': [
        2,
        'single'
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
    'sonarjs/cognitive-complexity': 'error',
    'sonarjs/no-all-duplicated-branches': 'error',
    'sonarjs/no-gratuitous-expressions': 'error',
    'sonarjs/no-identical-functions': [
        'error',
        3
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
}

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
        'plugin:sonarjs/recommended'
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
        'sort-imports-es6-autofix',
        'sonarjs'
    ],
    rules,
    settings: {
        react: {
            fragment: 'Fragment',
            pragma: 'React',
            version: 'detect',
        },
    },
}

module.exports = eslintConfig
