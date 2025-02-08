import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import HomeView from '@/views/HomeView.vue';
import Register from '@/views/Register.vue';
const routes = [
  { path: '/', redirect:'/login' },
  { path: '/home', component: HomeView },
  { path: '/register', component: Register },
  { path: '/login', component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

