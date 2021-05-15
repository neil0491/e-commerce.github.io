// initial state
const state = () => ({
  product: [],
  products: [],
  errorProduct: null,
  errorProducts: null,
});

// getters
const getters = {
  GET_ALL_PRODUCTS(state) {
    return state.products;
  },
  GET_PRODUCT(state) {
    return state.product;
  },
};

// actions
const actions = {
  async FETCH_ALL_PRODUCTS({ commit }) {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      commit("SET_PRODUCTS_TO_STATE", products);
    } catch (error) {
      commit("SET_PRODUCTS_ERROR", error);
      console.log(error);
    }
  },
  async FETCH_PRODUCT({ commit }, id) {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await res.json();
      console.log(product);
      commit("SET_PRODUCT_TO_STATE", product);
    } catch (error) {
      commit("SET_PRODUCT_ERROR", error);
      console.log(error);
    }
  },
};

// mutations
const mutations = {
  SET_PRODUCTS_TO_STATE(state, products) {
    state.products = products;
  },
  SET_PRODUCTS_ERROR(state, errorProduct) {
    state.errorProducts = errorProduct;
  },
  SET_PRODUCT_TO_STATE(state, product) {
    state.product = product;
  },
  SET_PRODUCT_ERROR(state, errorProduct) {
    state.errorProduct = errorProduct;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
