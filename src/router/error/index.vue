<template>
  <div class="error">
    <h1 v-if="error.statusCode === 404">
      {{error.message}}
    </h1>
    <h1 v-else>{{error.message || 'An error occured'}}</h1>
    <router-link to="/">Return Home page</router-link>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: {
    error: {
      type: Object,
      default () {
        return {
          statusCode: 404,
          message: 'Page not found'
        }
      }
    },
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
.error {
  padding-top: 50%;
  text-align: center;

  h1 {
    margin-bottom: 20px;
    font-size: 20px;
  }

  a {
    padding: 10px;
    color: #fff;
    background-color: #ff397e;
  }
}
</style>
