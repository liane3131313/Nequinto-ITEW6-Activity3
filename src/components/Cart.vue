<template>
  <div class="cart">
    <h1 class="cart-title">Your Cart</h1>
    <div v-if="isAuthenticated" class="cart-container">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <div class="item-details">
          <h3 class="item-name">{{ item.name }}</h3>
          <p class="price">Price: ₱{{ item.price }}</p>
        </div>
        <div class="quantity-section">
          <input type="number" v-model="item.quantity" @change="updateQuantity(item)" class="quantity-input">
          <button @click="removeFromCart(item)" class="remove-btn">Remove</button>
        </div>
      </div>
      <p v-if="cartItems.length === 0" class="empty-cart-message">Your cart is empty.</p>
      <div class="cart-actions">
        <p class="total-price">Total Price: ₱{{ getTotalPrice() }}</p>
        <button @click="removeAllItems" class="remove-all-btn">REMOVE ALL</button>
        <button @click="checkout" class="remove-all-btn">CHECK OUT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return {
      cartItems: [],
      isAuthenticated: false // Initialize isAuthenticated to false
    };
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    this.isAuthenticated = localStorage.getItem('token') !== null; // Update isAuthenticated based on token presence
  },
  methods: {
    removeFromCart(item) {
      const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }
    },
    updateQuantity(item) {
      if (item.quantity < 1) {
        item.quantity = 1;
      }
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    getTotalPrice() {
      return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    },
    removeAllItems() {
      this.cartItems = [];
      localStorage.removeItem('cart');
    },
    checkout() {
      if (this.cartItems == 0 ) {
        alert("No Items in Cart!");
      }else {
        alert("Thank you for shopping!");
      }
    }
  },
};
</script>

<style>
.cart {
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.cart-title {
  color: #ffffff;
  font-size: 34px;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 7px;
  background-color: white;
  box-shadow: 0px 0px 10px black;
}

.item-details {
  flex: 1;
  text-align: left;
  margin-right: 10px;
}

.item-name {
  color: #333;
  font-size: 20px;
  margin-bottom: 5px;
}

.price {
  color:  #c78c06;
  font-size: 20px;
  margin-bottom: 10px;
}

.quantity-section {
  display: flex;
  align-items: center;
}

.quantity-section input {
  width: 37px;
  padding: 4px;
  border: 3px solid #ccc;
  border-radius: 5px;
}

.remove-btn {
  background-color: #333333;
  color: #fff;
  border: none;
  padding: 5px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #d32f2f;
}

.empty-cart-message {
  margin-top: 20px;
  font-size: 30px;
  color: #333;
}

.total-price {
  margin-top: 20px;
  font-size: 30px;
  color: white;
}

.remove-all-btn {
  background-color: #fed016;
  font-size: 29px;
  color: #fff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border: none;
  padding: 15px 105px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-all-btn:hover {
  background-color: #d32f2f;
}

.login-required-message {
  margin-top: 20px;
  font-size: 30px;
  color: #333;
}
</style>
