<template>
  <div class="homepage">
    <h1>CARELINE STORE</h1>
    <img src="@/assets/careline.png" alt="Store Image" class="store-image">
    <p>Explore our amazing collection of products.</p>
    <button @click="startShopping" class="start-shopping-btn">Start Shopping</button>
  </div>
</template>

<script>
export default {
  methods: {
    startShopping() {
      //Redirect to the login page
      this.$router.push({ name: 'login' }); // Assuming your login route is named 'login'
    }
  }
};
</script>

<style>
/* Your component styles */
.homepage {
  text-align: center;
  padding: 5px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.homepage h1 {
  font-size: 2.5em;
  color: #ffffff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.homepage p {
  font-size: 2.2em;
  color: #c1bbbb;
}

.store-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.start-shopping-btn {
  display: inline-block;
  padding: 10px 230px;
  background-color: #F4BC1C;
  color: #fff;
  text-decoration: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 2.2em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

.start-shopping-btn:hover {
  background-color: #c69f34;
}
</style>
