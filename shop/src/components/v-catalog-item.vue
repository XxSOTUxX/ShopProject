<template>
  <div class='v-catalog-item'>
    <img class="v-catalog-item_image" :src="`${product_data.image}`" alt="img">
    <p class="v-catalog-item_name">{{ product_data.name }}</p>
    <p class="v-catalog-item_price">Price: {{ product_data.price }} Р.</p>
    <button
        class="v-catalog-item_add_to_cart_btn btn"
        @click="addToCart">Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      },
    }
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
    this.product_data.quantity=1
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    }
  }
}
</script>

<style lang="scss">
@import './src/assets/styles/variables.scss';

.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: $padding*2;
  margin-bottom: $margin*2;
}
</style>