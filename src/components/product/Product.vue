<template>
  <div class="product-image">
    <Image />
  </div>
  <div class="product-info">
    <Info />  
    <Variant /> 
    <button>Add to cart</button>
  </div>
</template>

<script>
import Image from './image/Image';
import Info from './info/Info';
import Variant from './variant/Variant';
import './Product.scss'

export default {
  name: 'Product',
  components: {
    Image,
    Info,
    Variant
  },
  data() {
    return {
      selectedVariant: {},
    };
  },
  methods: {
    updateSelectedVariant(id) {
      this.selectedVariant = this.Variants.find(variant => variant.id === id)
    }
  },
  computed: {
    Variants() {
      return this.$store.state.Variants;
    },
  },
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
