<template>
  <div class="color-circle" :class="{selected: id === 1}" style="background-color: blue;" data-id="1" @click="changeVariant"></div>
  <div class="color-circle" :class="{selected: id === 2}" style="background-color: green;" data-id="2" @click="changeVariant"></div>
</template>

<script>
export default {
  name: 'Variant',
  props: {
    id: {type: Number}
  },
  methods: {
    changeVariant(e) {
      const elm = e.target;
      const dataId = elm.getAttribute('data-id');
      this.$emit("change-variant", dataId);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.color-circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
  cursor: pointer;

  &.selected {
    box-shadow: 0px 0px 10px black;
  }
}
</style>
