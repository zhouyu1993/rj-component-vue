const path = require('path')
const chalk = require('chalk')
const rm = require('rimraf')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const args = process.argv.splice(2)
const _args = args.map((arg) => {
  return arg.toLocaleLowerCase()
})
const components = _args.length ? _args : require('./components.json')

components.map(component => {
  const lib = _args.length ? resolve(`lib/${component}`) : resolve('lib')
  const config = merge(base, {
    entry: component === 'index' ? resolve('packages/index.js') : resolve(`packages/${component}/index.js`),
    output: {
      path: component === 'index' ? resolve('lib') : resolve(`lib/${component}`),
      filename: 'index.js',
      library: 'rjcv',
      libraryTarget: 'umd'
    }
  })

  return rm(lib, (error) => {
    if (error) throw error
    webpack(config, (err, stats) => {
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')

      console.log(chalk.cyan('  Build complete.\n'))
    })
  })
})
