import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResearchView from '../views/ResearchView.vue'
import ProfileView from '../views/ProfileView.vue'
import EditView from '../views/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'research',
      component: ResearchView,
    },
    {
      path: '/',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/',
      name: 'edit',
      component: EditView,
    },
  ],
})

export default router
