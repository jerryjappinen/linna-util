// const path = require('path')

module.exports = {
  // rootDir: path.resolve(__dirname, './'),

  transformIgnorePatterns: [
    'node_modules/(?!lodash-es)'
  ],

  // transform: {
  //   '\\.m?js$': ['rollup-jest', {
  //     output: {
  //       sourcemap: true
  //     }
  //   }]
  // },

  // https://jestjs.io/docs/ecmascript-modules
  // transform: {},

  setupFilesAfterEnv: [
    // 'jest-chain', // broken
    'jest-extended/all'
  ]
}
