# loadingmethod

title: loadingmethod
---

## Import

``` js
import loadingmethod from 'rj-component-vue/lib/loadingmethod'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { loadingmethod } from 'rj-component-vue'
```

## Register

``` js
import Vue from 'vue'
Vue.prototype.$$loading = loadingmethod(Vue)
```

**注意，这里不再在底层将Vue打包，而是在使用时引入，以减少打包体积，避免重复引入**

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/#/loadingmethod)

``` js
export default {
  data () {
    return {
      loading1: null,
      loading2: null,
    }
  },
  methods: {
    open1 () {
      if (!this.loading1) {
        this.loading1 = this.$$loading()
      }
      this.loading1.open()
      setTimeout(() => {
        this.loading1.hide()

        setTimeout(() => {
          this.loading1.loading.text = '玩命儿赶来~'
          this.loading1.show()

          setTimeout(() => {
            this.loading1.close()
          }, 1000)
        }, 1000)
      }, 1000)
    },
    open2 () {
      if (!this.loading2) {
        this.loading2 = this.$$loading({
          showMask: false,
          node: document.querySelector('.el-loading')
        })
      }
      this.loading2.open()
      setTimeout(() => {
        this.loading2.hide()

        setTimeout(() => {
          this.loading2.loading.text = '玩命儿赶来~'
          this.loading2.show()

          setTimeout(() => {
            this.loading2.close()
          }, 1000)
        }, 1000)
      }, 1000)
    },
  },
}
```

## API

``` js
this.$$loading(config)
```

config 参数：

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| transition | Boolean | 是否使用 CSS 过渡类 | false | true |
| appear | Boolean | 是否在初始渲染的过渡 | false | true |
| showMask | Boolean | 是否显示蒙层 | false | true |
| text | Number, String | 加载界面提示文字 | false | 加载中 |
| `node` | Node Object | DOM节点对象 | false | - |

this.$$loading(config) 返回的是一个实例，具有以下方法：

* open() 创建 loading 组件
* hide() 隐藏 loading 组件
* show() 显示 loading 组件
* close() 销毁 loading 组件

具有以下属性：

* existing 是否存在于页面上
* loading 代表 loading 组件实例，可以修改相关的属性
* node 对应着 `config` 参数中的 `node`，值为 `undefined` 的时候，代表是在 `document.body` 下创建
