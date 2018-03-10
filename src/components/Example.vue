<template>
  <div class="demo-example">
    <h2 class="title">{{title}}</h2>
    <p class="tip">{{tip}}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    tip: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/mixin';
@import '../assets/css/rem';

.demo-example {
  @include nativeborder(bottom);
  padding: rem(20);
  background-color: #fff;

  .tip {
    margin: rem(20) 0;
  }
}
</style>
