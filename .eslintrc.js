module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    'jest/globals': true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'jest'],
  globals: {
    __DEV__: true,
  },
  rules: {
    'arrow-parens': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-mixed-operators': 0,
    'no-use-before-define': 0,
    radix: 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,

    semi: [2, 'never'],
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: ['**/tests/**.js', '/mock/**/**.js', '**/**.test.js', '**/**.spec.js'],
      },
    ],
  },
}
