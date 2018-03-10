<template>
  <div class="container">
    <demo-header />
    <demo-example title="时间格式化" tip="时间戳或者">
      <p>使用过滤器；时间戳：{{a | dateformate}}</p>
      <p>使用过滤器；时间戳，只显示年月日：{{a | dateformate('YY-MM-DD')}}</p>
      <p>使用过滤器；时间戳，返回对象：{{a | dateformate('', true)}}</p>
      <p>使用方法；时间戳：{{$$dateformate(a)}}</p>
      <p>使用过滤器；时间对象：{{b | dateformate}}</p>
      <p>使用过滤器；输入null，则返回当前时间：{{c | dateformate}}</p>
      <hr>
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
      a: 1509086278600,
      b: new Date(1509086278600),
      c: null,
    }
  },
  methods: {
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
