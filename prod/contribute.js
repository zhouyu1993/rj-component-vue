const fs = require('fs')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// 获取组件列表
const json = fs.readFileSync(resolve('prod/components.json'), 'utf-8')
// 获取入口模版
const js = fs.readFileSync(resolve('prod/template/index.js'), 'utf-8')
// 获取 vue 模版
const vue = fs.readFileSync(resolve('prod/template/index.vue'), 'utf-8')
// 获取 scss 模版
const scss = fs.readFileSync(resolve('prod/template/style.scss'), 'utf-8')
// 获取例子 vue 模版
const example = fs.readFileSync(resolve('prod/template/example.vue'), 'utf-8')

// 获取参数
var args = process.argv.splice(2)
var _args = args.map((arg) => {
  return arg.toLocaleLowerCase()
})

const _data = [...new Set([
  ...JSON.parse(json),
  ..._args
].sort())]

fs.writeFile(resolve('prod/components.json'), JSON.stringify(_data, null, 2), (error) => {
  if (error) {
    console.log('write error')
  } else {
    _args.forEach((_arg) => {
      if (!fs.existsSync(resolve(`packages/${_arg}`))) {
        fs.mkdirSync(resolve(`packages/${_arg}`))

        fs.writeFile(resolve(`packages/${_arg}/index.js`), js, (error) => {
          if (error) {
            console.log('write error', error)
          }
        })
        fs.writeFile(resolve(`packages/${_arg}/README.md`), `# ${_arg}`, (error) => {
          if (error) {
            console.log('write error')
          }
        })
        if (!fs.existsSync(resolve(`packages/${_arg}/src`))) {
          fs.mkdirSync(resolve(`packages/${_arg}/src`))
        }
        fs.writeFile(resolve(`packages/${_arg}/src/index.vue`), vue.replace('component', _arg), (error) => {
          if (error) {
            console.log('write error')
          }
        })
        fs.writeFile(resolve(`packages/${_arg}/src/style.scss`), scss, (error) => {
          if (error) {
            console.log('write error')
          }
        })
        if (!fs.existsSync(resolve(`src/router/${_arg}`))) {
          fs.mkdirSync(resolve(`src/router/${_arg}`))
        }
        fs.writeFile(resolve(`src/router/${_arg}/index.vue`), example, (error) => {
          if (error) {
            console.log('write error')
          }
        })
      }
    })
  }
})
