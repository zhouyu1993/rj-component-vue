<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.修改页面标题" tip="分别在hzw的APP、微信游览器、其他浏览器查看">
      <rjcv-button @click.native="$$title('你好，我是新标题')">修改页面标题</rjcv-button>
    </demo-example>
    <demo-example title="2.请求接口获取页面标题" tip="">
      <rjcv-button @click.native="fetchTitle">修改页面标题</rjcv-button>
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
    async fetchTitle () {
      try {
        await this.$$fetch('//cms.cekid.com/publish/998/newindex2017.json')
        this.$$title('这是fetchTitle')
      } catch (e) {
        console.log(e)
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
