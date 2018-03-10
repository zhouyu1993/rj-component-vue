# icon

title: icon
---

## Import

``` js
import icon from 'rj-component-vue/lib/icon'
import 'rj-component-vue/lib/icon/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { icon } from 'rj-component-vue'
```

## Register

``` js
Vue.component(icon.name, icon)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/#/icon)

``` html
<rjcv-icon name="camera" style="color: red" />
```

## API

| props | type | description | required | default |
|:---|:---|:---|:--|:---|
| name | String | 图标名称 | true | - |
