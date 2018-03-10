<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.中部弹出popup" tip="可选择点击蒙层是否关闭">
      <rjcv-button @click.native="open1">🐶点我🐶</rjcv-button>
      <rjcv-popup v-model="visible1" :visible="visible1">
        core
      </rjcv-popup>
    </demo-example>
    <demo-example title="2.底部弹出popup" tip="可选择点击蒙层是否关闭">
      <rjcv-button @click.native="open2">🐶点我🐶</rjcv-button>
      <rjcv-popup v-model="visible2" :visible="visible2" position="bottom" @mask="mask">
        bottom
      </rjcv-popup>
    </demo-example>
    <demo-example title="3.上部弹出popup" tip="需要自定义关闭方法">
      <rjcv-button @click.native="open3">🐶点我🐶</rjcv-button>
      <rjcv-popup :visible="visible3" position="top">
        bottom，设定 1 秒后关闭
      </rjcv-popup>
    </demo-example>
    <demo-example title="4.右侧滑出popup" tip="需要自定义关闭方法">
      <rjcv-button @click.native="open4">🐶点我🐶</rjcv-button>
      <rjcv-popup :visible="visible4" position="right">
        right，设定 1 秒后关闭
      </rjcv-popup>
    </demo-example>
    <demo-example title="5.左侧滑出popup" tip="需要自定义关闭方法">
      <rjcv-button @click.native="open5">🐶点我🐶</rjcv-button>
      <rjcv-popup :visible="visible5" position="left">
        left，设定 1 秒后关闭
      </rjcv-popup>
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
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
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
      setTimeout(() => {
        this.visible3 = false
      }, 1000)
    },
    open4 () {
      this.visible4 = true
      setTimeout(() => {
        this.visible4 = false
      }, 1000)
    },
    open5 () {
      this.visible5 = true
      setTimeout(() => {
        this.visible5 = false
      }, 1000)
    },
    mask () {
      alert('啦啦啦')
    }
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
</style>
