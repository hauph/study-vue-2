<template>
    <h1>Vue Mastery Socks</h1>
    <p class="product-availability">{{availability ? "In Stock" : "Out Stock"}}</p>
    <p class="product-shipping">Shipping: {{shipping ? "Has Fee" : "Free"}}</p>
    <p class="product-description" v-html="info"></p>
</template>

<script>
export default {
  name: 'Info',
  props: {
    availability: {type: Boolean},
    shipping: {type: Number},
    info: {type: String}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
