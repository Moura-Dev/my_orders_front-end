import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/custom-login.vue";
import CustomHome from "../views/custom-home.vue";
import Profile from "../views/custom-profile.vue";
import CustomClients from "../views/custom-clients.vue";
import CustomProduct from "../views/custom-product.vue";
import CustomOrder from "../views/custom-order.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: CustomHome,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/clients",
    name: "clients",
    component: CustomClients,
  },
  {
    path: "/product",
    name: "product",
    component: CustomProduct,
  },
  {
    path: "/order",
    name: "order",
    component: CustomOrder,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
