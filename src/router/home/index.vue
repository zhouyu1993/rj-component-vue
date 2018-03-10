<template>
  <div class="home" v-show="app">
    <demo-header />
    <div class="nav">
      <rjcv-badge :defaultIndex="hover" @badgeClick="handleBadgeClick">
        <rjcv-badgeitem v-for="(value, index) in components" :key="index" :index="index" :text="value.text" :info="value.list.length"></rjcv-badgeitem>
      </rjcv-badge>
      <div class="nav-content">
        <section v-show="hover === index" v-for="(value, index) in components">
          <router-link v-for="(v, i) in value.list" :key="i" :to="{ path: v.path }" class="nav-content-list">
            {{v.name}}
            <rjcv-icon name="daohang" />
          </router-link>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      hover: 0,
      components: [
        {
          text: '基础组件',
          list: [
            {
              path: '/button',
              name: 'button'
            },
            {
              path: '/cell',
              name: 'cell'
            },
            {
              path: '/icon',
              name: 'icon'
            },
            {
              path: '/loadingicon',
              name: 'loadingicon'
            },
            {
              path: '/mask',
              name: 'mask'
            },
            {
              path: '/row',
              name: 'row'
            },
          ]
        },
        {
          text: '表单组件',
          list: [
            {
              path: '/checklist',
              name: 'checklist'
            },
            {
              path: '/radio',
              name: 'radio'
            },
            {
              path: '/star',
              name: 'star'
            },
            {
              path: '/switcher',
              name: 'switcher'
            },
            {
              path: '/upload',
              name: 'upload'
            },
          ]
        },
        {
          text: '视图组件',
          list: [
            {
              path: '/actionsheet',
              name: 'actionsheet'
            },
            {
              path: '/avatar',
              name: 'avatar'
            },
            {
              path: '/badge',
              name: 'badge'
            },
            {
              path: '/card',
              name: 'card'
            },
            {
              path: '/image',
              name: 'image'
            },
            {
              path: '/imagepreview',
              name: 'imagepreview'
            },
            {
              path: '/mapper',
              name: 'mapper'
            },
            {
              path: '/pagelist',
              name: 'pagelist'
            },
            {
              path: '/swiper',
              name: 'swiper'
            },
            {
              path: '/tab',
              name: 'tab'
            },
            {
              path: '/uploader',
              name: 'uploader'
            },
          ]
        },
        {
          text: '反馈组件',
          list: [
            {
              path: '/loading',
              name: 'loading'
            },
            {
              path: '/loadingdirective',
              name: 'loadingdirective'
            },
            {
              path: '/loadingmethod',
              name: 'loadingmethod'
            },
            {
              path: '/msgbox',
              name: 'msgbox'
            },
            {
              path: '/popup',
              name: 'popup'
            },
            {
              path: '/toast',
              name: 'toast'
            },
          ]
        },
        {
          text: 'JS 组件',
          list: [
            {
              path: '/asyncload',
              name: 'asyncload'
            },
            {
              path: '/avatarview',
              name: 'avatarview'
            },
            {
              path: '/dateformate',
              name: 'dateformate'
            },
            {
              path: '/fetch',
              name: 'fetch'
            },
            {
              path: '/imageoptimizer',
              name: 'imageoptimizer'
            },
            {
              path: '/imageview',
              name: 'imageview'
            },
            {
              path: '/issupportwebp',
              name: 'issupportwebp'
            },
            {
              path: '/lazyloading',
              name: 'lazyloading'
            },
            {
              path: '/log',
              name: 'log'
            },
            {
              path: '/map',
              name: 'map'
            },
            {
              path: '/protocol',
              name: 'protocol'
            },
            {
              path: '/scroll',
              name: 'scroll'
            },
            {
              path: '/share',
              name: 'share'
            },
            {
              path: '/title',
              name: 'title'
            },
            {
              path: '/xhtml',
              name: 'xhtml'
            },
          ]
        }
      ],
    }
  },
  computed: {
    ...mapState(['app']),
  },
  watch: {},
  components: {
    'demo-header': async () => import('@/components/Header'),
  },
  methods: {
    ...mapActions(['getApp']),
    show () {
      if (this.app) {
        this.$nextTick(() => {
          this.$$showPage()
        })
      }
    },
    handleBadgeClick (index) {
      this.hover = index
    },
  },
  created () {
    if (!this.app) {
      setTimeout(() => {
        this.getApp('rj-component-vue')
      }, 500)
    }
  },
  mounted () {
    this.show()
  },
  updated () {
    this.show()
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
@import '../../assets/css/rem';

.home {
  .nav {
    display: flex;
    margin-top: rem(20);
    background-color: #fff;

    &-content {
      flex: 1;
      background-color: #fff;

      &-list {
        @include border(bottom, #f1f1f1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: rem(20);
        margin: 0 0 0 rem(20);
        font-size: rem(32);
        line-height: rem(60);

        .icon-daohang {
          color: #ff397e;
        }
      }
    }
  }
}
</style>
