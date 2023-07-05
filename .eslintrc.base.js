module.exports = {
    root: true,
    env: {
        node: true,
        jest: true
    },
    ignorePatterns: ['.eslintrc.js', '.eslintrc.*.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'import', 'prettier'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript'
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts']
        }
    },
    rules: {
        curly: ['error', 'all'],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'no-console': 'warn',
        'comma-dangle': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'array-callback-return': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'import/order': [
            'error',
            {
                'newlines-between': 'always-and-inside-groups',
                groups: [
                    // built-in types are first
                    'builtin',
                    // then external modules
                    'external',
                    // then parent types
                    'parent',
                    // then siblings
                    'sibling',
                    // Then the index file
                    'index',
                    // Then the rest: internal and external type
                    'object'
                ],
                pathGroups: [
                    {
                        // make imports from `src` their own group
                        pattern: 'src/**',
                        group: 'external',
                        position: 'after'
                    }
                ]
            }
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        'spaced-comment': [
            'error',
            'always',
            {
                markers: [
                    '!',
                    '?',
                    '*',
                    '//',
                    'todo',
                    'TODO',
                    'bug',
                    'BUG',
                    'hack',
                    'HACK',
                    'fixme',
                    'FIXME',
                    'xxx',
                    'XXX',
                    'fix',
                    'FIX',
                    'fixit',
                    'FIXIT',
                    '#region',
                    '#endregion'
                ],
                exceptions: ['-', '+']
            }
        ]
    }
};
