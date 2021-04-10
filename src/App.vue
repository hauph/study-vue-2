<template>
  <div class="app-inner">
    <div class="app__header"></div>
    <div class="app__body">
      <Product />
      <Review />
    </div>
  </div>
</template>

<script>
import Product from "./components/Product/Product";
import Review from "./components/Review/Review";
import './App.scss'

export default {
  name: "App",
  components: {
    Product,
    Review,
  },
};
</script>

<style lang='scss'>

</style>
