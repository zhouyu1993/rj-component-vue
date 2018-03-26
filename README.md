# rj-component-vue-example

[![npm](https://img.shields.io/npm/v/rj-component-vue.svg) ![npm](https://img.shields.io/npm/dm/rj-component-vue.svg)](https://www.npmjs.com/package/rj-component-vue) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> rainjoy font-end component library based on vue.js

| 英文 | 中文 | 0 - 未开发 1 - 试验性 2 - 稳定 | 文档 |
|:---|:---|:---|:---|
| `General` | `基础组件` | ⚡️ | ⚡️ |
| button | 按钮 | 1 | ✅ |
| cell | 单元格 | 1 | ？|
| icon | 字体图标 | 1 | ✅ |
| loadingicon | 加载图标 | 1 | ✅ |
| mask | 蒙层 | 1 | ✅ |
| row | flex布局 | 1 | ? |
| `Form` | `表单组件` | ⚡️ | ⚡️ |
| checklist | 多选按钮 | 1 | ? |
| radio | 单选按钮 | 1 | ? |
| star | 星星打分评级 | 1 | ✅ |
| switcher | 开关切换 | 1 | ✅ |
| upload | 上传按钮 | 1 | ✅ |
| `Display` | `视图组件` | ⚡️ | ⚡️ |
| actionsheet | 操作表 | 1 | ✅ |
| avatar | 头像 | 1 | ✅ |
| bandge | 徽章切换(竖型tab) | 1 | ✅ |
| card | 卡片 | 1 | ✅ |
| image | 图片 | 1 | ✅ |
| imagepreview | 图片预览 | 1 | ✅ |
| mapper | 地图 | 1 | ✅ |
| pagelist | 上滑滚动分页加载 | 1 | ? |
| swiper | 轮播 | 1 | ✅ |
| tab | 标签切换 | 1 | ✅ |
| uploader | 上传照片 | 1 | ✅ |
| `Feedback` | `反馈组件` | ⚡️ | ⚡️ |
| loading | 加载界面 | 1 | ✅ |
| loadingdirective | 加载指令 | 1 | ✅ |
| loadingmethod | 加载方法 | 1 | ✅ |
| msgbox | 消息弹出框 | 1 | ✅ |
| popup | 模态弹窗 | 1 | ✅ |
| toast | 消息提示框 | 1 | ✅ |
| `JS API` | `JS 组件` | ⚡️ | ⚡️ |
| asyncload | 异步加载JS | 1 | ✅ |
| avatarview | 万像优图+过滤协议+webp+默认头像 | 1 | ✅ |
| dateformate | 时间格式化 | 1 | ✅ |
| fetch | 发送请求或者获取资源（同构） | 1 | ✅ |
| imageoptimizer | 万像优图 | 1 | ✅ |
| imageview | 万像优图+过滤协议+webp | 1 | ✅ |
| issupportwebp | 是否支持webp | 1 | ✅ |
| lazyloading | 懒加载 | 1 | ✅ |
| log | 当开启调试模式，页面链接带有rj_debug=on或cookie里面包含rj_debug=on，控制台输出 | 1 | ✅ |
| map | 高德地图SDK | 1 | ✅ |
| protocol | 过滤协议 | 1 | ✅ |
| scroll | 滚动指令 | 1 | ✅ |
| title | 修改页面标题 | 1 | ✅ |
| xhtml | 富文本处理 | 1 | ✅ |

# USE

## Install

npm install === yarn add

``` bash
npm install -S rj-component-vue
```

``` bash
npm install git+https://github.com/zhouyu1993/rj-component-vue.git
```

或者

``` bash
npm install git+ssh://git@github.com:zhouyu1993/rj-component-vue.git
```

## Import all components

``` js
import Vue from 'vue'
import rjcv from 'rj-component-vue'

Vue.use(rjcv)
```

## Import specific component

``` js
import Vue from 'vue'
import Test from 'rj-component-vue/lib/Test'

import 'rj-component-vue/lib/Test/style.css'

Vue.component(Test.name, Test)
```

**⚠️Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

- Auto import css file
- Modular import component

### Install babel-plugin-component

``` bash
npm install -D babel-plugin-component
```

### Set the configuration of babel-plugin-component in .babelrc

``` json
{
  "plugins": [
    [
      "component",
      [
        {
          "libraryName": "rj-component-vue",
          "style": true
        }
      ]
    ]
  ]
}
```

### Then import rj-component-vue

``` js
import Vue from 'vue'
import { Test } from 'rj-component-vue'

Vue.component(Test.name, Test)
```
