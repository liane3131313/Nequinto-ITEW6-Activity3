// index.js router directory
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import ProductList from '../components/ProductList.vue'
import Cart from '../components/Cart.vue'
import HomePage from '@/views/HomePage.vue'


const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/productlist',
    name: 'productlist',
    component: ProductList
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: { requiresAuth: true } // Add meta field to require authentication
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;