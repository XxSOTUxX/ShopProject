<template>
  <div class='v-main-wrapper'>
    <v-catalog/>
    <v-cart
        v-if="CART.length"
        :cart_data="CART"
    />
  </div>
</template>

<script>
import VCatalog from "@/components/v-catalog.vue";
import VCart from "@/components/v-cart.vue";
import {mapGetters} from "vuex";

export default {
  components: {VCart, VCatalog},
  name: 'v-main-wrapper',
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
        'CART'
    ])
  },
  methods: {},
  watch: {},
  mounted() {
    console.log('Hello i am alive!')
  }
}
</script>

<style>
.v-main-wrapper {
  margin: 0 auto;
}
</style>
