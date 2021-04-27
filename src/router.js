import Vue from "vue";
import VueRouter from "vue-router";

import Login from "./Views/Login.vue";
import Registration from "./Views/Registration.vue";

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: "/login", component: Login },
    { path: "/register", component: Registration },
  ],
});

Vue.use(VueRouter);

export default router;
