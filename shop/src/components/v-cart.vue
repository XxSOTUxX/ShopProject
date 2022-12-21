<template>
  <div class='v-cart'>
    <h1>Cart</h1>
    <v-cart-item
      v-for="item in cart_data"
      :key="item.article"
      :cart_item_data="item"
    />
  </div>
</template>

<script>
import VCartItem from "@/components/v-cart-item.vue";

export default {
  name: "v-cart",
  components: {VCartItem},
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    },
  },
  date() {
    return {}
  },
  computed: {}
}
</script>

<style>

</style>