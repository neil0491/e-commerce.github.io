import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
import modal from "./modules/modal";
import categories from "./modules/categories";
import cart from "./modules/cart";
import screen from "./modules/screen";
import auth from "./modules/auth";
import search from "./modules/search";
import sorted from "./modules/sorted";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    modal,
    categories,
    cart,
    screen,
    auth,
    search,
    sorted,
  },
  strict: process.env.DEV,
});
