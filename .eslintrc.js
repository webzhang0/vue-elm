// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": ['off', 'tab'],
    'no-console': 'off',
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-trailing-spaces': 'off',
    // 'no-extra-semi': 'off',
    // 'no-empty-function': [
    //   'error',
    //   {
    //     allow: ['functions', 'arrrowFunctions']
    //   }
    // ],
    // 定义过的变量必须使用
    'no-unused-vars': [
      'error',
      {
          vars: 'all',
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true
      }
    ],
    /**
     * 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
     * @category Stylistic Issues
     */
    'max-nested-callbacks': ['error', 3],
    // 每个js文件写完后 要多写一行的空白行：0、['error', 'always']、['warn'、'never']
    'eol-last': 0
  }
}
