// import commonjs from '@rollup/plugin-commonjs'
// import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

// Specify entrypoints here
// entrypoint, output
const builds = [
  ['src/index.js', 'index'],
  ['src/contentful/index.js', 'contentful']
]

const external = [
  'lodash',
  'lodash-es',
  'date-fns',
  'md5',
  'parse-csv',
  'remove-markdown'
]

// This is the actual Rollup config
const getRollupConfigs = (entrypoint, output) => {
  return [
    // // browser-friendly UMD build
    // {
    //   input: entrypoint,
    //   external,
    //   output: {
    //     name: output,
    //     file: `dist/${output}.umd.js`,
    //     format: 'umd'
    //   },
    //   plugins: [
    //     peerDepsExternal(),
    //     resolve(), // so Rollup can find `ms`
    //     commonjs() // so Rollup can convert `ms` to an ES module
    //   ]
    // },
    // {
    //   input: entrypoint,
    //   output: {
    //     name: output,
    //     file: `dist/full/${output}.umd.js`,
    //     format: 'umd'
    //   },
    //   plugins: [
    //     resolve(), // so Rollup can find `ms`
    //     commonjs() // so Rollup can convert `ms` to an ES module
    //   ]
    // },

    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
      input: entrypoint,
      external: ['ms'].concat(external),
      output: [
        { file: `dist/${output}.cjs.js`, format: 'cjs' },
        { file: `dist/${output}.esm.js`, format: 'es' }
      ],
      plugins: [
        peerDepsExternal()
      ]
    },
    {
      input: entrypoint,
      external: ['ms'],
      output: [
        { file: `dist/full/${output}.cjs.js`, format: 'cjs' },
        { file: `dist/full/${output}.esm.js`, format: 'es' }
      ]
    }
  ]
}

// Compose final format
const configs = builds.reduce((prev, args) => {
  return prev.concat(getRollupConfigs(...args))
}, [])

export default configs
