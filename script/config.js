const path = require('path')
const typescript = require('rollup-plugin-typescript')
const { eslint } = require('rollup-plugin-eslint')

const resolve = p => path.resolve(__dirname, '../', p)

const builds = {
  'full-dev': {
    input: resolve('src/main.ts'),
    output: resolve('dist/main.js'),
    format: 'umd'
  },
  'full-prod': {
    input: resolve('src/main.ts'),
    output: resolve('dist/main.min.js'),
    format: 'umd'
  }
}

function getConfig(name) {
  const opt = builds[name]
  const config = {
    input: opt.input,
    output: {
      file: opt.output,
      format: opt.format,
      name: 'View'
    },
    plugins: [
      eslint({
        fix: true
      }),
      typescript()
    ]
  }

  return config
}

function getAllConfig() {
  return Object.keys(builds).map(getConfig)
}

exports.config = getConfig
exports.getAllConfig = getAllConfig
