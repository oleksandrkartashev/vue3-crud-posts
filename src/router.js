import * as VueRouter from 'vue-router';
import vHome from "./views/vHome.vue";
import vNotFound from "./views/vNotFound.vue";
import vPost from "./views/vPost.vue";

const routes = [
  { path: '/', component: vHome },
  { path: '/:pathMatch(.*)', component: vNotFound },
  { name: "post", path: '/posts/:id', component: vPost },
];

const router = VueRouter.createRouter({
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  history: VueRouter.createWebHistory(),
  routes: routes,
});

export default router;

