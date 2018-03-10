# star

title: star
---

## Import

``` js
import star from 'rj-component-vue/lib/star'
import 'rj-component-vue/lib/star/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { star } from 'rj-component-vue'
```

## Register

``` js
Vue.component(star.name, star)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/star)

``` html
<rjcv-star v-model="score" :score="score" />
```

``` js
export default {
  data () {
    return {
      score: 10,
    }
  },
  watch: {
    score (score) {
      console.log(score)
    }
  },
}
```

``` html
<rjcv-star :score="8" :canClick="false" />
<rjcv-star :score="5" :canClick="false" />
```

## API

| props | type | description | required | default |
|:---|:---|:---|:--|:---|
| v-model | Number | 评分的分值 | false | - |
| score | Number | 评分的分值 | false | 10 |
| canClick | Boolean  | 是否可评分 | false | true |
