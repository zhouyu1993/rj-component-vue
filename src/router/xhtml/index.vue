<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.binding.value是字符串" tip="">
      <rjcv-button @click.native="getXhtmls1">getXhtmls1</rjcv-button>
      <div class="xhtml" v-xhtml="xhtmls1"></div>
    </demo-example>
    <demo-example title="2.binding.value是对象" tip="">
      <rjcv-button @click.native="getXhtmls2">getXhtmls2</rjcv-button>
      <div class="xhtml" v-xhtml="xhtmls2"></div>
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
      xhtmls1: '',
      xhtmls2: {}
    }
  },
  methods: {
    getXhtmls1 () {
      this.xhtmls1 = '你好<p><img src="https://cmspic-10003009.image.myqcloud.com/9d869ad0-64a1-4feb-8a93-bd0a6bd2b741"></p>我也好'
    },
    getXhtmls2 () {
      this.xhtmls2 = {
        xhtml: '你好<p><img src="https://cmspic-10003009.image.myqcloud.com/9d869ad0-64a1-4feb-8a93-bd0a6bd2b741"></p>我也好',
        width: 600,
        useWebp: false,
        type: 'png',
        way: 2,
        quality: 0.7,
      }
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
