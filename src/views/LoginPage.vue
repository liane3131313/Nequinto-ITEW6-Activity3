<!-- eslint-disable vue/multi-word-component-names -->
<!-- LoginPage.vue --> //views directory
<template>
  <div class="login-container">
    <div class="login-page">
      <h1>Login Page</h1>
      <form>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button @click="handleClick">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleClick() {
      localStorage.setItem('token', '12345');
      this.$router.push({ name: 'productlist' });
    },
    handleLogin() {
      // Store username and password in localStorage
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
      // Redirect or perform any necessary action after login
      // For example, you can use this.$router.push('/dashboard') to redirect to a dashboard page
    }
  }
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.login-page {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #f9f9f9;
  padding: 55px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-page h1 {
  color: #333;
  font-size: 30px;
}

.form-group {
  margin-bottom: 30px;
}

.form-group label {
  display: block;
  color: #333;
  font-size: 20px;
  margin-bottom: 11px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #b9b8b8;
  border-radius: 5px;
}

button {
  background-color: #333333;
  color: #fff;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: medium;
}

button:hover {
  background-color: #d32f2f;
}
</style>
