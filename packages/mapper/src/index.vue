<template>
  <rjcv-popup class="rjcv-mapper" v-model="visible" :visible="visible" position="right" :transition="transition" :appear="appear">
    <div class="rjcv-mapper-core" id="rjcv-mapper-core"></div>
    <div class="rjcv-mapper-guide" v-if="address">
      <rjcv-actionsheet :visible="actionsheetVisible" :actions="actions" v-on:action="action" />
    </div>
  </rjcv-popup>
</template>

<script>
import actionsheet from '../../actionsheet'
import map from '../../map'
import popup from '../../popup'

export default {
  name: 'rjcv-mapper',
  components: {
    'rjcv-actionsheet': actionsheet,
    'rjcv-popup': popup,
  },
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    transition: {
      type: Boolean,
      default: true,
    },
    appear: {
      type: Boolean,
      default: true,
    },
    address: {
      type: String,
      default: '',
    },
    mark: {
      type: Boolean,
      default: true
    },
    markIcon: {
      type: String,
      default: '',
    },
    zoom: {
      type: Number,
      default: 14
    },
    center: {
      type: Array,
      default () {
        return []
      }
    },
  },
  data () {
    const that = this
    return {
      view: null,
      actionsheetVisible: false,
      actions: [
        {
          text: '驾车',
          callback () {
            that.route('Driving')
          }
        },
        {
          text: '公交',
          callback () {
            that.route('Transfer')
          }
        },
        {
          text: '步行',
          callback () {
            that.route('Walking')
          }
        },
      ],
    }
  },
  methods: {
    async getPosition () {
      try {
        const res = await map.getPosition({
          id: 'rjcv-mapper-core',
          mark: this.mark,
          markIcon: this.markIcon
        })
        this.$emit('success', res)
      } catch (e) {
        this.$emit('fail', e)
      }
    },
    async mapping () {
      try {
        this.view = await map.mapping({
          id: 'rjcv-mapper-core',
          dragEnable: false,
          zoomEnable: false,
          zoom: this.zoom,
          center: this.center,
          mark: this.mark,
          markIcon: this.markIcon
        })
        if (this.address) {
          const info = new window.AMap.InfoWindow({
            content: `<p class="rjcv-mapper-desc">${this.address}</p><div class="rjcv-mapper-guide" value="rjcv-mapper-guide">导航</div>`
          })
          info.open(this.view, this.view.getCenter())
          document.body.addEventListener('click', (e) => {
            if (e.target.getAttribute('value') === 'rjcv-mapper-guide') {
              this.actionsheetVisible = true
            }
          })
        }
        this.$emit('success', {
          code: 1,
          message: '成功'
        })
      } catch (e) {
        this.$emit('fail', {
          code: 0,
          message: '失败'
        })
      }
    },
    action () {
      this.actionsheetVisible = false
    },
    async route (plugin) {
      this.actionsheetVisible = false
      try {
        const res = await map.getPosition({
          view: this.view
        })
        const { lng, lat } = res.data && res.data.position
        map.route(this.view, plugin, {
          origin: [lng, lat],
          destination: this.center
        })
        document.querySelector('.rjcv-mapper .amap-info').style.display = 'none'
        this.view.setStatus({
          dragEnable: true,
          zoomEnable: true
        })
        this.$emit('success', {
          code: 1,
          message: '导航成功'
        })
      } catch (e) {
        this.$emit('fail', {
          code: 0,
          message: '导航失败'
        })
      }
    },
  },
  beforeMount () {
    this.center.length !== 2 ? this.getPosition() : this.mapping()
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
