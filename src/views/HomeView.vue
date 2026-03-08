<script lang="ts">
import ProductCard from '@components/card/ProductCard.vue'
import { productsMock } from '@/mock/products.mock'
import { Cart } from '@/model/cart.model';
import CartComponent from '@/components/cart/CartComponent.vue';
import type { Product } from '@/model/product.model';

export default {
  name: 'ProductPage',
  components: {
    CartComponent,
    ProductCard,
  },
  data() {
    return {
      products: productsMock,
      cart: new Cart(),
    }
  },
  methods: {
    addToCart(product: Product, quantity: number = 1) {
      console.log(product);
      this.cart.add(product, quantity)
      console.log(this.cart);
    }
  }
}
</script>

<template>
  <main>
    <CartComponent :cart="cart" />
    <div class="product-list">
      <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCart(product)" />
    </div>
  </main>
</template>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 10px;
  height: fit-content;
  padding: 10px;
}
</style>
