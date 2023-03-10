// This is a reusable configuration file c opied from https://github.com/actions/reusable-workflows/tree/main/reusable-configurations. Please don't make changes to this file as it's the subject of an automatic update.
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-plugin-jest/recommended',
    'eslint-config-prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-jest'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description'
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'no-control-regex': 'off',
    'no-constant-condition': ['error', {checkLoops: false}]
  },
  overrides: [
    {
      files: ['**/*{test,spec}.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'jest/no-standalone-expect': 'off',
        'jest/no-conditional-expect': 'off'
      }
    }
  ],
  env: {
    node: true,
    es6: true,
    'jest/globals': true
  }
};
