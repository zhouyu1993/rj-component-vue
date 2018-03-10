<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.元素内部滚动" tip="">
      <ul class="scroll-el" v-scroll.el="scrollFunc">
        <li v-for="(value, index) in array" :key="index">{{value}}</li>
      </ul>
    </demo-example>
    <demo-example title="2.window下滚动" tip="">
      <ul class="scroll-window" v-scroll="scrollFun">
        <li v-for="(value, index) in array" :key="index">{{value}}</li>
      </ul>
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
      value: false,
      arr: [],
      valuec: false,
      array: [0, 1, 2, 3],
    }
  },
  methods: {
    update () {
      if (this.arr.length > 10) return
      this.arr = this.arr.concat([0, 1, 2, 3])
      this.value = false
    },
    scrollFun (state) {
      console.log(state)
      if (this.value) return
      if (state === 'bottom') {
        console.log('到底')
        this.value = true
        this.update()
      } else if (state === 'top') {
        console.log('到顶')
      }
    },
    updatec () {
      this.array = this.array.concat([0, 1, 2, 3])
      this.valuec = false
    },
    scrollFunc (state) {
      if (this.valuec) return
      if (state === 'bottom') {
        console.log('到底c')
        this.valuec = true
        this.updatec()
      } else if (state === 'top') {
        console.log('到顶c')
      }
    }
  },
  mounted () {
    this.$$showPage()
    this.arr = [0, 1, 2, 3]
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
@import '../../assets/css/rem';
@import '../../assets/css/vars';

.container {
  width: rem(750);
  height: 100%;
  margin: 0 auto;

  .scroll-window {
    width: rem(700);
    padding: 0;
    margin: 0 auto;
    list-style: none;

    li {
      width: rem(600);
      height: rem(500);
      padding: 0;
      margin: 0 auto;
      color: #fff;
      text-align: center;
      background-color: #999;
      border-bottom: 1px solid #fff;
    }
  }

  .scroll-el {
    width: rem(600);
    height: rem(500);
    padding: 0;
    margin: 0 auto rem(30);
    overflow: scroll;
    list-style: none;
    background-color: #444;

    li {
      width: rem(300);
      height: rem(200);
      padding: 0;
      margin: rem(20) auto;
      color: #fff;
      text-align: center;
      background-color: #999;
      border-bottom: 1px solid #fff;
    }
  }
}
</style>
