import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
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
    path: "/category/:id",
    name: "Category",
    component: () => import("../views/Category.vue"),
  },
  {
    path: "/brands/:id",
    name: "Brands",
    component: () => import("../views/Brands.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/CartScreen.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth.vue"),
    meta: {
      requiresAuth: true,
    },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.username) {
      console.log(store.getters.username);
      next("/auth");
      return;
    }
    next();
  } else {
    next();
  }
});
export default router;
