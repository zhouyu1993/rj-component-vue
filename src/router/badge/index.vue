<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.基础用法" tip="数组；设置默认显示第3个(序列为2)；图标、信息（数字等）、显示文本、禁止、点击回调">
      <rjcv-badge :defaultIndex="2">
        <rjcv-badgeitem v-for="(value, index) in badges" :key="index" :index="index" :name="value.iconName" :info="value.info" :text="value.text" :disabled="index === 1" @badgeClick="handleBadgeClick">
        </rjcv-badgeitem>
      </rjcv-badge>
    </demo-example>
    <demo-example title="2.slot" tip="定义其他内容，如链接">
      <rjcv-badge style="width: 200px">
        <a v-for="(value, index) in badges" :key="index" :href="value.href">
          <rjcv-badgeitem :index="index" @badgeClick="handleBadgeClick">
            <span>{{value.text}}</span>
          </rjcv-badgeitem>
        </a>
      </rjcv-badge>
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
      badges: [
        {
          iconName: 'flower',
          info: 0,
          text: '选型一',
          href: 'https://zhouyu1993.github.io/',
        },
        {
          iconName: 'kefu',
          info: '99',
          text: '选型二',
        },
        {
          iconName: 'store',
          info: 1,
          text: '选型三',
        },
        {
          iconName: 'search',
          info: 100,
          text: '选型四',
        },
      ]
    }
  },
  methods: {
    handleBadgeClick (value) {
      console.log(value)
    },
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;

  .right {
    flex: 1;
    margin-left: 20px;
  }
}
</style>
