<template>
  <div class='v-cart'>
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">Back to catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart</p>
    <v-cart-item
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import VCartItem from "@/components/v-cart-item.vue";
import {mapActions, mapGetters} from "vuex";

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
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  methods : {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style>

</style>