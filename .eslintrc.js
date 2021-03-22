module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  globals: {
    expect: true
  },
  ignorePatterns: ['**/*.config.*', '**/*.setup.*'],
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
