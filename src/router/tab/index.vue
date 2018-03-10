<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.基础用法" tip="数组；设置默认显示第3个(序列为2)；图标、信息（数字等）、显示文本、禁止、点击回调">
      <rjcv-tab :defaultIndex="2" @tabClick="handleTabClick">
        <rjcv-tabitem v-for="(value, index) in tabs" :key="index" :index="index" :name="value.iconName" :info="value.info" :text="value.text" :disabled="index === 1">
        </rjcv-tabitem>
      </rjcv-tab>
    </demo-example>
    <demo-example title="2.slot" tip="定义其他内容，如链接">
      <rjcv-tab @tabClick="handleTabClick">
        <rjcv-tabitem v-for="(value, index) in tabs" :key="index" :index="index">
          <span>{{value.text}}</span>
        </rjcv-tabitem>
      </rjcv-tab>
    </demo-example>
    <demo-example title="3.sticky" tip="如果启用 sticky = true: 对于旧浏览器（不支持 position: sticky）的，开发者需要自己用 js 实现；如果支持，可以修改 css（top/bottom）来改变固定的位置">
      <rjcv-tab :sticky="true" @tabClick="handleTabClick">
        <rjcv-tabitem v-for="(value, index) in tabs" :key="index" :index="index" :name="value.iconName" :info="value.info" :text="value.text" :disabled="index === 1">
        </rjcv-tabitem>
      </rjcv-tab>
      <div style="height:600px">
        空白区域
      </div>
    </demo-example>
    <demo-example title="4.另一种样式" tip="">
      <rjcv-tab :useStyle="1" @tabClick="handleTabClick">
        <rjcv-tabitem v-for="(value, index) in tabs" :key="index" :index="index" :name="value.iconName" :info="value.info" :text="value.text" :disabled="index === 1">
        </rjcv-tabitem>
      </rjcv-tab>
    </demo-example>
    <demo-example title="5.可滚动" tip="先看一下不可滚动的，太多就导致换。如果启用scroll = true: 如果要实现点击后当前item可滑动定位，开发者需要自己用 css+js 实现">
      <rjcv-tab @tabClick="handleTabClick">
        <rjcv-tabitem v-for="(value, index) in tabs2" :key="index" :index="index" :name="value.iconName" :info="value.info" :text="value.text">
        </rjcv-tabitem>
      </rjcv-tab>
      <br>
      <rjcv-tab :scroll="true" @tabClick="handleTabClick">
        <rjcv-tabitem v-for="(value, index) in tabs2" :key="index" :index="index" :name="value.iconName" :info="value.info" :text="value.text">
        </rjcv-tabitem>
      </rjcv-tab>
    </demo-example>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Example from '@/components/Example'

export default {
  components: {
    'demo-example': Example,
    'demo-header': Header,
  },
  data () {
    return {
      tabs: [
        {
          iconName: 'flower',
          info: 1,
          text: '选型一',
        },
        {
          iconName: 'kefu',
          info: 0,
          text: '选型二',
        },
        {
          iconName: 'store',
          info: '2',
          text: '选型三',
        },
      ],
      tabs2: [
        {
          iconName: '',
          info: '0',
          text: '选型一',
        },
        {
          iconName: '',
          info: 0,
          text: '选型二',
        },
        {
          iconName: '',
          info: '',
          text: '选型三',
        },
        {
          iconName: '',
          info: '',
          text: '选型四',
        },
        {
          iconName: '',
          info: '',
          text: '选型五',
        },
        {
          iconName: '',
          info: '',
          text: '选型六',
        },
        {
          iconName: '',
          info: '',
          text: '选型七',
        },
      ],
    }
  },
  methods: {
    handleTabClick (value) {
      console.log(value)
    },
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
@import '../../assets/css/rem';
@import '../../assets/css/vars';
</style>
