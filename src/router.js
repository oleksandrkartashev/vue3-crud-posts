import * as VueRouter from 'vue-router';
import vHome from "./views/vHome.vue";
import vNotFound from "./views/vNotFound.vue";

const routes = [
  { name: "home", path: '/', component: vHome },
  { path: '/:pathMatch(.*)', component: vNotFound },
];

const router = VueRouter.createRouter({
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  history: VueRouter.createWebHistory(),
  routes: routes,
});

export default router;

