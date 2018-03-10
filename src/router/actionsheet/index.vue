<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.基础用法" tip="默认属性">
      <rjcv-button @click.native="open1">🐶点我🐶</rjcv-button>
      <rjcv-actionsheet v-model="visible1" :visible="visible1"></rjcv-actionsheet>
    </demo-example>
    <demo-example title="2.点击蒙层不自动关闭" tip="自定义点击事件">
      <rjcv-button @click.native="open2">🐶点我🐶</rjcv-button>
      <rjcv-actionsheet v-model="visible2" :visible="visible2" :closeOnClickMask="false" @mask="mask"></rjcv-actionsheet>
    </demo-example>
    <demo-example title="3.不加蒙层" tip="自定义关闭方法">
      <rjcv-button @click.native="open3">🐶点我🐶</rjcv-button>
      <rjcv-actionsheet v-model="visible3" :visible="visible3" :showMask="false"></rjcv-actionsheet>
    </demo-example>
    <demo-example title="4.点击底部按钮不自动关闭" tip="自定义点击事件">
      <rjcv-button @click.native="open4">🐶点我🐶</rjcv-button>
      <rjcv-actionsheet v-model="visible4" :visible="visible4" :closeOnClickAction="false" @action="action"></rjcv-actionsheet>
    </demo-example>
    <demo-example title="5.选项数组写法" tip="加标题">
      <rjcv-button @click.native="open5">🐶点我🐶</rjcv-button>
      <rjcv-actionsheet v-model="visible5" :visible="visible5" :title="title" :actions="actions"></rjcv-actionsheet>
    </demo-example>
    <demo-example title="6.选项slot写法" tip="不加标题">
      <rjcv-button @click.native="open6">🐶点我🐶</rjcv-button>
      <rjcv-actionsheet v-model="visible6" :visible="visible6">
        <rjcv-button class="rjcv-actionsheet-btn">支付宝支付</rjcv-button>
        <rjcv-button class="rjcv-actionsheet-btn">微信支付</rjcv-button>
      </rjcv-actionsheet>
    </demo-example>
  </div>
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
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      title: '支付方式',
      actions: [
        {
          text: '支付宝支付',
          closeOnClick: true,
          callback () {
            alert('支付宝支付')
          },
        },
        {
          text: '微信支付',
          closeOnClick: false,
          callback () {
            alert('微信支付')
          }
        },
      ],
      visible6: false,
    }
  },
  methods: {
    open1 () {
      this.visible1 = true
    },
    open2 () {
      this.visible2 = true
    },
    open3 () {
      this.visible3 = true
    },
    open4 () {
      this.visible4 = true
    },
    open5 () {
      this.visible5 = true
    },
    open6 () {
      this.visible6 = true
    },
    mask () {
      alert('mask')
    },
    action () {
      alert('action')
    },
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
</style>
