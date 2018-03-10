<template>
  <div class="demo-head">
    <a href="https://zhouyu1993.github.io/rjcv/">
      <img class="logo" src="https://zhouyu1993.github.io/rjcv/static/icon.png">
    </a>
    <h1 class="name">{{$route.name}}</h1>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/rem';

.demo-head {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: rem(20) 0;
  background-color: #f8f8f8;

  .logo {
    width: rem(100);
    height: rem(100);
  }

  .name {
    margin-top: rem(20);
    font-size: rem(38);
  }

  .more {
    position: absolute;
    top: rem(20);
    right: rem(20);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: rem(80);
    height: rem(80);
    padding: rem(12);
    font-size: rem(20);
    line-height: rem(30);
    color: #999;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
}
</style>
