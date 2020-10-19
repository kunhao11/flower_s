import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Details from "../views/Details.vue";
import ProductLists from "../views/ProductLists.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ShoppingCar from "../views/ShoppingCar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/productlists",
    component: ProductLists,
  },
  {
    path: "/details/:did",
    props: true,
    component: Details,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/shoppingcar/:uid",
    props: true,
    component: ShoppingCar,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
