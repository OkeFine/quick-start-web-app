module.exports = {
  'plugins': ['@typescript-eslint'],
  'extends': ['react-app'],
  'parserOptions': {
    'project': 'tsconfig.json',
    'tsconfigRootDir': __dirname,
    'sourceType': 'module',
  },
  'settings': {
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true
      }
    }
  },
  'rules': {
    'object-curly-spacing': ['warn', 'always'],
    'no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'args': 'none'
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'args': 'none'
      }
    ],
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        'ignoreRestArgs': true
      }
    ],
    'max-len': [
      'warn',
      {
        'code': 100,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreComments': true
      }
    ],
    'no-plusplus': [
      'error',
      {
        'allowForLoopAfterthoughts': true
      }
    ],
    'react/jsx-key': 'error',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-boolean-value': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'react/jsx-closing-bracket-location': 'off',
    '@typescript-eslint/indent': ['off'],
    'no-restricted-globals': 1,
    'arrow-body-style': 1,
    'no-alert': 1,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['off'],
    'no-param-reassign': 'off',
    'react/no-array-index-key': 1,
    'react/jsx-curly-newline': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'jsx-a11y/alt-text': 'off',
  }
};
