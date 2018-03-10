<template>
  <div class="container">
    <demo-header />
    <demo-example title="fetch-服务端与客户端同构" tip="兼容">
      <rjcv-button @click.native="fetch1">请求接口</rjcv-button>
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
      pageTitle: '',
    }
  },
  methods: {
    async fetch1 () {
      try {
        const json = await this.$$fetch(
          '//recommend.cekid.com/recommendsvc/RmdInHomePage',
          {
            versio: 'v1',
            source: 2,
            pagesize: 10,
            pagenum: 0,
          },
          {
            method: 'GET',
            credentials: 'omit',
          },
        )
        console.log(json)
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
