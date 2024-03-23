<!-- App.vue -->
<template>
  <div id="app">
    <nav>
      <div class="nav-links">
        <router-link to="/homepage">HOME</router-link> |
        <router-link to="/login">LOGIN</router-link> |
        <router-link to="/productlist">PRODUCTS</router-link> |
        <router-link to="/cart">SHOPPING CART</router-link> |
        <button @click="logout" class="logout-btn">LOGOUT</button>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push({ name: 'login' });
    }
  }
}
</script>

<style>
/* Style for navigation bar */
nav {
  background-color: #F4BC1C;
  color: #fff;
  padding: 15px;
  text-align: center;
}

.nav-links {
  display: inline-block;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 24px;
  cursor: pointer;
}

.nav-links > router-link {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}

/* Style for logout button */
.logout-btn {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.logout-btn:hover {
  background-color: #d32f2f;
}

nav a.router-link-exact-active{
  color: white;
  padding: 10px;
  background-color: #333;
  border-radius: 5px;
}
</style>
