import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "root",
    redirect: { name: "sign-in" },
  }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  },
});

export default router;
