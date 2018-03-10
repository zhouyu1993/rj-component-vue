# title

title: title
---

## Import

``` js
import title from 'rj-component-vue/lib/title'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { title }  from 'rj-component-vue'
```

## Register

``` js
Vue.prototype.$$title = title
```

## Example

[Example 传送门](https://zhouyu1993.github.io/rjcv/#/title)

``` js
this.$$title('这是新标题')
```

## API

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| title | String | 页面标题 | false | 孩子王 |

可以在 `router.afterEach` 中使用，统一设置每个路由的页面标题，只是这样无法动态设置；

如果需要动态获取页面标题的话，可以在每个路由组件中单独调用。
