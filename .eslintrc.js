module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint'],
  ignorePatterns: ['*.css', '*.svg', '**/dist/**/*', '**/static/**/*'],
  rules: {
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    // React 17
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-boolean-value': 'error',
    'prefer-template': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-tag-spacing': 'error',
  },
}
