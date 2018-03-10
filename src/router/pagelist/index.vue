<template>
  <div class="container">
    <demo-header />
    <demo-example title="" tip="">
      <rjcv-pagelist class="hor" :next="onEnd" :threshold="threshold" :loading="loading" :bottom="end">
        <div class="item" v-for="(item, index) in items" :key="index">
          {{item.toString()}}
        </div>
        <div slot="loading">
          正在加载……
        </div>
        <div slot="bottom">
          我是有底线的
        </div>
      </rjcv-pagelist>
    </demo-example>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Example from '@/components/Example'

let cur = 0
let total = 4

export default {
  components: {
    'demo-example': Example,
    'demo-header': Header,
  },
  data () {
    return {
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      loading: false,
      end: false,
      threshold: 0
    }
  },
  methods: {
    onEnd () {
      console.log('on end')
      if (this.loading) return

      console.log('next')
      this.loading = true

      setTimeout(() => {
        console.log('loaded')
        let {items} = this
        items.splice(items.length, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
        this.loading = false
        cur++
        if (cur === total) {
          this.end = true
        }
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

.item {
  padding: 30px;
  border: 1px solid #f00;
}
</style>
