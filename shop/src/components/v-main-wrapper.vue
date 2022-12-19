<template>
  <div class='v-main-wrapper'>
   <p>{{title}}</p>
    <v-catalog/>
    <v-cart/>
  </div>
</template>

<script>
  import VCatalog from "@/components/v-catalog.vue";
  import VCart from "@/components/v-cart.vue";

  export default {
    components: {VCart, VCatalog},
    name: 'v-main-wrapper',
    props: {},
    data() {
      return {
        title: 'Main wrapper'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
      console.log('Hello i am alive!')
    }
  }
</script>

<style>
  .v-main-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    max-width: 900px;
    margin: 0 auto;
  }
</style>
