<template>
  <div class="csr">
    <div class="app" style="display:none">
      <router-view />
    </div>
    <aside class="aside">
      <!-- <rjcv-loading :visible="true" /> -->
    </aside>
  </div>
</template>

<script>
// import loading from '~/loading'

export default {
  name: 'app',
  components: {
    // 'rjcv-loading': loading,
  },
}
</script>

<style lang="scss">
@import './assets/css/reset';
</style>

<style lang="scss" scoped>
@import './assets/css/rem';

.csr {
  width: rem(750);
  height: 100%;
  margin: 0 auto;

  .app {
    height: 100%;
    background-color: #f4f4f4;
  }
}
</style>
