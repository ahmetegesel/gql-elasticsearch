module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off', // temporary rule disable
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  globals: {
    describe: false,
    test: false,
    expect: false,
    jest: false,
    beforeAll: false,
  },
};
