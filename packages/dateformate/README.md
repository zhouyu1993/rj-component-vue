# dateformate

title: dateformate
---

## Import

``` js
import dateformate from 'rj-component-vue/lib/dateformate'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { dateformate }  from 'rj-component-vue'
```

## Register

``` js
Vue.filter('dateformate', dateformate)
Vue.prototype.$$dateformate = dateformate
```

## Example

[Example 传送门](https://zhouyu1993.github.io/rjcv/#/dateformate)

``` html
<p>{{date | dateformate(format, original}}</p>
<p>{{$$dateformate(date, format, original)}}</p>
```

## API

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| date | Date Object, Number, String | 时间对象/时间戳 | true | 如果不填，则取当前时间 |
| format | String | 格式化类型 | false | Y-MM-DD hh:mm:ss |
| original | Boolean | 是否以对象形式显示 | false | false |

* date 不符合【Date Object, Number, String】这三种类型，会取 new Date() 当前时间
* 当 original 为 false，会根据 format 返回格式化后的时间字符串
* 当 original 为 true，返回格式化后的时间对象

以对象形式显示：

``` bash
{
  year,
  month,
  day,
  week,
  hour,
  minute,
  second
}
```
