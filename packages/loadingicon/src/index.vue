<template>
  <div class="rjcv-loadingicon">
    <div class="rjcv-loadingicon-item" v-for="i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"></div>
  </div>
</template>

<script>
export default {
  name: 'rjcv-loadingicon',
  props: {
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
