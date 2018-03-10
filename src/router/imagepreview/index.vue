<template>
  <div class="container imagepreview">
    <demo-header />
    <demo-example title="" tip="">
      <div class="list1">
        <img v-for="(pic, index) in pics1" :key="index" :src="pic" @click="preview(pics1)">
      </div>
      <div class="list2">
        <img v-for="(pic, index) in pics2" :key="index" :src="pic" @click="preview(pics2)">
      </div>
      <rjcv-imagepreview v-model="visible" :visible="visible" :pics="pics" />
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
      visible: false,
      pics: [],
      pics1: [],
      pics2: [],
    }
  },
  methods: {
    preview (value) {
      this.pics = value
      this.visible = true
    },
  },
  created () {
    this.pics1 = [
      '//activpic-10004025.image.myqcloud.com/d4c0925a-19e5-4169-a387-853367efb7c9'
    ]
    this.pics2 = [
      '//activpic-10004025.image.myqcloud.com/18592c94-9d50-438c-a62c-be40bb577efe',
      '//activpic-10004025.image.myqcloud.com/78efea27-d3a7-4a11-8978-20cbbaad8931',
      '//activpic-10004025.image.myqcloud.com/4faa4608-b48e-442e-b177-e12defa1846a'
    ]
  },
  mounted () {
    this.$$showPage()
  }
}
</script>

<style lang="scss" scoped>
.list1, .list2 {
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
