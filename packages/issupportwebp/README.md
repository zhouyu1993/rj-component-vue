# issupportwebp

title: issupportwebp
---

## Import

``` js
import issupportwebp from 'rj-component-vue/lib/issupportwebp'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { issupportwebp } from 'rj-component-vue'
```

## Register

``` js
Vue.prototype.$$issupportwebp = issupportwebp
```

## Example

[Example 传送门](//zhouyu1993.github.io/awesome/rjcv/#/issupportwebp)

``` js
let img = '//activpic-10004025.image.myqcloud.com/83c17d64-470d-4c7b-8671-13f23af581f4'
if (this.$$issupportwebp()) {
  img += '?format/webp'
}
```
