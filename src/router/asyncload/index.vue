<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.异步加载" tip="加载成功效果">
      <rjcv-button @click.native="fetch1">我是个按钮</rjcv-button>
      <div class="jquery-div1" style="font-size: 20px;">
        当点击按钮后，这里显示1
      </div>
    </demo-example>
    <demo-example title="2.异步加载" tip="加载失败效果">
      <rjcv-button @click.native="fetch2">我是个按钮</rjcv-button>
      <div class="jquery-div2" style="font-size: 20px;">
        当点击按钮后，这里不能显示1，因为出错
      </div>
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
    async fetch1 () {
      try {
        await this.$$asyncload('//code.jquery.com/jquery-3.2.1.slim.min.js', () => {
          const $ = window.$
          $('.jquery-div1').html(1)
        }, false)
      } catch (e) {
        console.log(e)
        alert('失败')
      }
    },
    async fetch2 () {
      try {
        await this.$$asyncload('//xx.com/a.js', () => {
          const $ = window.$
          $('.jquery-div2').html(1)
        }, true)
      } catch (e) {
        console.log(e)
        alert('失败')
      }
    },
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
</style>
