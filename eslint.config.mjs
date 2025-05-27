import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import importHelpersPlugin from 'eslint-plugin-import-helpers';

export default [
  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: tsparser,
      sourceType: 'module',
    },

    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
      'import-helpers': importHelpersPlugin,
    },

    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: ['/^node:.*/', 'module', ['parent', 'sibling', 'index']],
          alphabetize: { order: 'asc', ignoreCase: true },
        },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'prettier/prettier': 'warn',
    },
  },
];
