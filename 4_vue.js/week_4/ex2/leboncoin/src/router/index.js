import { createRouter, createWebHistory } from "vue-router";

// import components used for routing
import HomeView from "../views/HomeView.vue";
import OfferView from "../views/OfferView.vue";

// create routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/offer/:id", // use param to scope on offer
      name: "offer",
      component: OfferView,
      props: true, // authorize props to be send
    },
  ],
});

export default router;
