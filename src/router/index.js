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
    name: "About",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "*",
    component: { render: (h) => h("div", ["404! Page Not Found!"]) },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
