<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.body下" tip="">
      <rjcv-button @click.native="open1">显示loading</rjcv-button>
      <div v-loading="visible1" :loading-text="text1"></div>
    </demo-example>
    <demo-example title="2.el下" tip="绑定指令的当前元素下，且不显示蒙层">
      <rjcv-button @click.native="open2">显示loading</rjcv-button>
      <div class="el-loading" v-loading.el.noMask="visible2" :loading-text="text2"></div>
    </demo-example>
    <router-link :to="{ name: 'home' }">home</router-link>
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
      text1: '',
      visible2: false,
      text2: '',
    }
  },
  methods: {
    open1 () {
      this.visible1 = true

      setTimeout(() => {
        this.visible1 = false

        setTimeout(() => {
          this.text1 = '玩命儿赶来~'
          this.visible1 = true

          setTimeout(() => {
            this.visible1 = false
          }, 1000)
        }, 1000)
      }, 1000)
    },
    open2 () {
      this.visible2 = true

      setTimeout(() => {
        this.visible2 = false

        setTimeout(() => {
          this.text2 = '玩命儿赶来~'
          this.visible2 = true

          setTimeout(() => {
            this.visible2 = false
          }, 1000)
        }, 1000)
      }, 1000)
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

.el-loading {
  height: rem(400);
  margin-top: rem(20);
  background-color: red;
}
</style>
