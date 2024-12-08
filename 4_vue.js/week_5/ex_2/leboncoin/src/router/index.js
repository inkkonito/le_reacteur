import { createRouter, createWebHistory } from 'vue-router'

// import components used for routing
import HomeView from '../views/HomeView.vue'
import OfferView from '../views/OfferView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

// create routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/offer/:id', // use param to scope on offer
      name: 'offer',
      component: OfferView,
      props: true, // authorize props to be send
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundView,
    },
  ],
})

export default router
