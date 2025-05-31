import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Character from '../pages/Character.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/character/:id', name: 'Character', component: Character }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
