const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, './'),

  setupFilesAfterEnv: [
    './spec/setup.js'
  ],

  // testPathIgnorePatterns: [
  //   '<rootDir>/e2e'
  // ],

  // https://github.com/vuejs/vue-cli/issues/1584
  // transformIgnorePatterns: [
  //   'node_modules/(?!(linna)/)'
  // ],

  setupFiles: [
    // '<rootDir>/test/spec/setup'
  ],
  coverageDirectory: '<rootDir>/coverage'
}
