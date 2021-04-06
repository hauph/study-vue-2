<template>
  <div class="product-image">
    <Image :src="imgSrc" />
  </div>
  <product-info :variant="selectedVariant"></product-info>
</template>

<script>
import Image from './image/Image';
import ProductInfo from './ProductInfo';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import './Product.scss';

export default {
  name: 'Product',
  components: {
    Image,
    ProductInfo
  },
  data() {
    return {
      selectedVariant: {},
      imgSrc: null
    };
  },
  mounted() {
    this.selectedVariant = this.Variants[0]
    this.imgSrc = img1;
  },
  methods: {
    updateSelectedVariant(id) {
      this.selectedVariant = this.Variants.find(variant => variant.id === id)
      if (id === 1) {
        this.imgSrc = img1;
      } else {
        this.imgSrc = img2;
      }
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
