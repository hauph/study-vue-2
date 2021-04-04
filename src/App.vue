<template>
  <div class="app-inner">
    <div class="app__header"></div>
    <div class="app__body">
      <Product />
    </div>
  </div>
</template>

<script>
import Product from './components/product/Product.vue'

export default {
  name: 'App',
  components: {
    Product
  },
}
</script>

<style lang='scss'>
  body{
    margin: 0;
    background-color: #f2f2f2;
    margin: 0px;
    font-family: tahoma;
    color: #282828;
  
    .app-inner {
      .app__header {
        background: linear-gradient(-90deg, #84cf6a, #16c0b0);
        height: 60px;
        margin-bottom: 25px;
        -webkit-box-shadow: 0px 2px 15px -12px rgb(0 0 0 / 57%);
        -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
        box-shadow: 1px 1px 5px rgb(0 0 0 / 57%);
      }
      .app__body {
        margin: 0px 50px;
      }
    }
  }
</style>
