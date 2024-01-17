module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './packages/*/tsconfig.json']
  },
  plugins: ['react'],

  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['**/storybook-react-native'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'multiline-ternary': 'off'
  }
}
