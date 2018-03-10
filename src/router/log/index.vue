<template>
  <div class="container">
    <demo-header />
    <demo-example title="打开控制台Console" tip="这里只会在 `链接上query带有rj_debug=on或者cookie带有rj_debug=on` 情况下打印内容">
      <rjcv-button @click.native="open">显示log</rjcv-button>
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
    }
  },
  methods: {
    open () {
      this.$$log('你点击了按钮', '嗯是的')
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
