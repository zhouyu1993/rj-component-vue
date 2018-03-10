<template>
  <div class="container">
    <demo-header />
    <demo-example title="过滤协议" tip="去除资源的http/https">
      原来带有http-----{{url1 | protocol}}

      <br>

      原来带有https-----{{$$protocol(url2)}}
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
      url1: 'http://zhouyu1993.github.io/',
      url2: 'https://zhouyu1993.github.io/',
    }
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
</style>
