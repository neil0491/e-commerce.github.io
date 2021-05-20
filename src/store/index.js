import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
import modal from "./modules/modal";
import categories from "./modules/categories";
import cart from "./modules/cart";
import screen from "./modules/screen";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    modal,
    categories,
    cart,
    screen,
  },
  strict: process.env.DEV,
});
