<template>
 <div class="v-cart-item">
   <img class="v-catalog-item_image" :src="`../assets/images/${cart_item_data.image}`" alt="img">
   <div class="v-cart_item__info">
     <p>{{ cart_item_data.name }}</p>
     <p>{{ cart_item_data.price }}</p>
     <p>{{ cart_item_data.article }}</p>
   </div>
   <div class="v-cart-item__quantity">{{cart_item_data.quantity}}</div>
   <button>Delete</button>
 </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data (){
    return {}
  },
  mounted() {
    this.cart_item_data.quantity=1
  },
}
</script>

<style lang="scss">
@import './src/assets/styles/variables.scss';
  .v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
      width: 100px;
    }
  }

</style>