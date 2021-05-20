import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import CartScreen from "../views/CartScreen.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("../views/ProductScreen.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/CartScreen.vue"),
  },
  {
    path: "*",
    component: () => import("../views/404page"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
