<template>
  <div class="color-circle" style="background-color: blue;" data-id="1"></div>
  <div class="color-circle" style="background-color: green;" data-id="2"></div>
</template>

<script>
export default {
  name: 'Variant',
  props: {
    id: {type: String}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color-circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
}
</style>
