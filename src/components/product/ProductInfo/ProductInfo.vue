<template>
  <div class="product-info">
    <Info
      :availability="variant.available"
      :shipping="variant.shipping"
      :info="variant.info"
    />
    <Variant :id="variant.id" @change-variant="updateSelectedVar" />
    <button
      id="btn-atc"
      class="button"
      :class="{ disabled: !variant.available }"
      :disabled="!variant.available"
      @click="handleClickATC"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
import Info from "./Info/Info";
import Variant from "./Variant/Variant";

export default {
  name: "ProductInfo",
  components: {
    Info,
    Variant,
  },
  props: {
    variant: { type: Object },
    updateSelectedVar: { type: Function },
  },
  methods: {
    handleClickATC() {
      this.$emit("handleClickATC");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.product-info {
  flex: 2;

  .disabled {
    background-color: #d8d8d8;
    cursor: not-allowed;
  }
}
</style>
