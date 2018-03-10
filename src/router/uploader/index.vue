<template>
  <div class="container">
    <demo-header />
    <demo-example title="基本用法" tip="">
      <rjcv-uploader :pictures="pictures" :maxNum="9" @success="success" @fail="fail" />
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
      pictures: [
        {
          preview: 'http://wxmallpic-10004025.image.myqcloud.com/10c28a60-818f-4790-90f6-9fe303650c73',
          state: '上传成功'
        }
      ],
      value: 1,
    }
  },
  methods: {
    success (res) {
      console.log(res)
    },
    fail (res) {
      this.$$toast(res.message)
    }
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
