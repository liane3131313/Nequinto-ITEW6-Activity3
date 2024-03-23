//shoppingcart.vue //view directory
<template>
    <div class="shopping-cart">
      <!-- Other shopping cart content -->
      <ProductList :products="products" @add-to-cart="addToCart" />
    </div>
  </template>
  
  <script>
  import ProductList from '@/components/ProductList.vue';
  
  export default {
    components: {
      ProductList
    },
    data() {
      return {
        products: [
          { id: 1, name: 'Product 1', price: 100 },
          { id: 2, name: 'Product 2', price: 150 },
          { id: 3, name: 'Product 3', price: 200 }
        ],
        cart: []
      };
    },
    methods: {
      addToCart(product) {
        // Add the selected product to the cart
        this.cart.push(product);
        // Optionally, you can navigate to the shopping cart page here
        this.$router.push({ name: 'cart' });
      }
    }
  };
  </script>
  
  <style>
  /* Your component styles */
  </style>
  
