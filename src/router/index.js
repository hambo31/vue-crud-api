import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/users",
      name: "UsersIndex",
      component: () => import("../views/users/UsersIndex.vue"),
    },
    {
      path: "/users/create",
      name: "UsersCreate",
      component: () => import("../views/users/UsersCreate.vue"),
    },
    {
      path: "/users/:id/edit",
      name: "UsersEdit",
      component: () => import("../views/users/UsersEdit.vue"),
      props: true,
    },
    {
      path: "/login",
      name: "UsersLogin",
      component: () => import("../views/users/UsersLogin.vue"),
    },
  ],
});

export default router;
