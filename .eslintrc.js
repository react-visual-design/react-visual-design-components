module.exports = {
  extends: [
    require.resolve('@umijs/fabric/dist/eslint'),
    'plugin:react/recommended',
    'plugin:json/recommended',
  ],

  globals: {},

  parser: 'babel-eslint',
  rules: {
    semi: [2, 'never'],
    'import/no-extraneous-dependencies': 0,
    'prefer-destructuring': 0,
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'jsx-a11y/alt-text': 0,
    'react/jsx-uses-react': 2,
  },
}
