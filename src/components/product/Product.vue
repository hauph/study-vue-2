<template>
  <div class="product-wrapper">
    <div class="product-image">
      <Image :src="imgSrc" />
    </div>
    <product-info :variant="selectedVariant" :updateSelectedVar="updateSelectedVariant" @handleClickATC="updateCart"></product-info>
    <div class="cart"><p>Cart (<span>{{totalInCart}}</span>)</p></div>
  </div>
</template>

<script>
import Image from './Image/Image';
import ProductInfo from './ProductInfo/ProductInfo';
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
      imgSrc: null,
      totalInCart: 0,
    };
  },
  mounted() {
    this.selectedVariant = this.Variants[0]
    this.imgSrc = img1;
  },
  methods: {
    updateSelectedVariant(id) {
      const _id = Number(id);
      this.selectedVariant = this.Variants.find(variant => variant.id === _id)
      if (_id === 1) {
        this.imgSrc = img1;
      } else {
        this.imgSrc = img2;
      }
    },
    updateCart() {
      this.totalInCart += 1;
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

</style>
