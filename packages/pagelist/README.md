# pagelist

# 翻页列表  ```rjcv-pagelist```

使用了```v-scroll```指令

### 示例代码：
```html
<rjcv-pagelist class="hor" :next="onEnd" :threshold="threshold" :loading="loading" :end="end">
  <div class="item" v-for="(item, index) in items" :key="index">
    {{item.toString()}}
  </div>
  <div slot="loading">
    正在加载……
  </div>
  <div slot="bottom">
    我是有底线的
  </div>
</rjcv-pagelist>
```
### Slots:
|Slot name|Description|
|:--|:--|
|loading|```loading===true```时显示|
|bottom|```bottom===true```时显示|
### Props:
|Prop name|Type|Description|Required|Default|
|:---|:---|:---|:--|:---|
|next|Function|滚动到头时执行|true||
|direction|String|滚动方向，```up```/```left```||up|
|inner|Boolean|容器内部滚动，```false```为```window```滚动||false|
|threshold|Number|触发next的阈值||40|
|loading|Boolean|显示loading slot||false|
|bottom|Boolean|显示bottom slot||false|
