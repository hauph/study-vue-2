<template>
  <div class="product-info">
    <Info :availability="variant.available" :shipping="variant.shipping" :info="variant.info" />  
    <Variant :id="variant.id" /> 
    <button id="btn-atc">Add to cart</button>
  </div>
</template>

<script>
import Info from './info/Info';
import Variant from './variant/Variant';

export default {
  name: 'ProductInfo',
  components: {
    Info,
    Variant
  },
  props: {
      variant: { type: Object },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#btn-atc {
    margin: 30px;
    background-color: #39495c;
    border-radius: 5px;
    font-size: 18px;
    width: 160px;
    height: 60px;
    color: white;
    padding: 20px;
    box-shadow: inset 0 -0.6em 1em -0.35em rgb(0 0 0 / 17%), inset 0 0.6em 2em -0.3em rgb(255 255 255 / 15%), inset 0 0 0em 0.05em rgb(255 255 255 / 12%);
    text-align: center;
    cursor: pointer;
}
</style>
