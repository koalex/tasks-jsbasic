module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'max-len': ["error", { "code": 120 }],
    'no-alert': 'off'
  },
};
