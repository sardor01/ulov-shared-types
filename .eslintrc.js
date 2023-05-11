module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'check-file'],
  ignorePatterns: ['dist/*'],
  rules: {
    'check-file/folder-match-with-fex': [
      'error',
      { '*.test.{js,cjs,mjs,ts,cts,mts}': '**/__tests__/' }
    ],
    'check-file/filename-naming-convention': [
      'error',
      { '**/*.{js,cjs,mjs,ts,cts,mts}': 'SNAKE_CASE' },
      { ignoreMiddleExtensions: true }
    ],
    'check-file/folder-naming-convention': ['error', { 'src/**/': 'SNAKE_CASE' }]
  }
}
