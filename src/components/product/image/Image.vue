<template>
    <img :src="image">
</template>

<script>
import img1 from '../../../assets/1.jpg';
// import img2 from '../../../assets/2.jpg';

export default {
  name: 'Image',
  props: {
    image: { default: img1, type: String },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    border: 2px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    padding: 15px;
    -webkit-box-shadow: 0px 2px 15px -12px rgb(0 0 0 / 57%);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
}
</style>
