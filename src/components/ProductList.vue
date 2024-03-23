<template>
  <div class="product-list">
    <h1>Product List</h1>
    <div v-if="products.length === 0">No products available.</div>
    <div v-else class="product-grid">
      <div v-for="product in products" :key="product.id" class="product">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p class="price">Price: ₱{{ product.price }}</p>
        <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        { id: 1, name: 'Cloud Tint', price: 195.00 },
        { id: 2, name: 'Jelly Tint', price: 140.00 },
        { id: 3, name: 'Lip&Cheek Tint', price: 100.00 },
        { id: 4, name: 'Kiss Sticks', price: 175.00 },
        { id: 5, name: 'Matte Lipstick', price: 165.00 },
        { id: 6, name: 'Shadow Palette', price: 180.00 },
        { id: 7, name: 'Soft Lipstick', price: 180.00 },
        { id: 8, name: 'Stain Gloss', price: 160.00 },
        { id: 9, name: 'Skinny Mascara', price: 165.00 }
      ],
    };
  },
  methods: {
    addToCart(product) {
      const token = localStorage.getItem('token');
      if (!token || token === 'undefined') {
        return;
      }

      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

      if (existingProductIndex !== -1) {
        // Product already exists in the cart, increment quantity
        cartItems[existingProductIndex].quantity++;
      } else {
        // Product doesn't exist in the cart, add it with quantity 1
        product.quantity = 1;
        cartItems.push(product);
      }

      localStorage.setItem('cart', JSON.stringify(cartItems));
      console.log('Added to cart:', product);
    },
    checkAuthentication() {
      const token = localStorage.getItem('token');
      if (!token || token === 'undefined') {
        this.$router.push({ name: 'login' });
      }
    }
  },
  created() {
    this.checkAuthentication();
  }
};
</script>

<style>
h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 34px;
  color: #fff;
}
body {
  background-color: #333;
}

.product-list {
  text-align: center;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product {
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fed016;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.product h2 {
  color: #333333;
  font-size: 20px;
  margin-bottom: 10px;
}

.product p {
  color: #666666;
  font-size: 16px;
  margin-bottom: 10px;
}

.price {
  color: #000000;
  font-size: 18px;
  margin-bottom: 10px;
}

.add-to-cart-btn {
  background-color: #333333;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 18px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-to-cart-btn:hover {
  background-color: #fc4848;
}
</style>
