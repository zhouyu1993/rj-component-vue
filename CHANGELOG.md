# changelog

## 2017/03/10

test

## 2017/12/18

给 js 加属性 defer、crossorigin=anonymous

``` js
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

plugins: [
  // https://github.com/numical/script-ext-html-webpack-plugin
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer',
    custom: [
      {
        test: /\.js$/,
        attribute: 'crossorigin',
        value: 'anonymous'
      }
    ]
  }),
]
```

## 2017/11/20

init

### pwa 模式

main.js 可开启 service-worker.js

开发环境，使用 /service-worker.js 进行模拟，但是没有更新机制，需要手动更改版本号

生产环境配置在 /build/webpack.prod.conf.js 中

``` js
const pkg = require('../package.json')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

plugins: [
  // https://github.com/goldhand/sw-precache-webpack-plugin
  new SWPrecacheWebpackPlugin({
    filename: 'service-worker.js',
    cacheId: pkg.name,
    runtimeCaching: [
      {
        urlPattern: config.build.urlPattern,
        handler: 'networkFirst'
      },
    ],
  }),
]
```
