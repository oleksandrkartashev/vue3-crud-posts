import * as VueRouter from "vue-router";
import vHome from "@/views/vHome.vue";
import vNotFound from "@/views/vNotFound.vue";
import vAddPost from "@/views/vAddPost.vue";
import vEditPost from "@/views/vEditPost.vue";

const routes = [
  { name: "home", path: "/", component: vHome },
  { name: "add-post", path: "/add-post/", component: vAddPost },
  { name: "edit-post", path: "/edit-post/:id", component: vEditPost },
  { path: "/:pathMatch(.*)", component: vNotFound },
];

const router = VueRouter.createRouter({
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  history: VueRouter.createWebHistory(),
  routes: routes,
});

export default router;
