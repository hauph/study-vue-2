<template>
    <img :src="imgSrc">
</template>

<script>


export default {
  name: 'Image',
  props: {
    imgSrc: { type: String },
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
