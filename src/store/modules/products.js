// initial state
const state = () => ({
  products: [],
});

// getters
const getters = {};

// actions
const actions = {
  // async GET_ALL_PRODUCTS({ commit }) {
  //   try {
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const products = await res.json();
  //     commit("SET_PRODUCTS_TO_STATE", products);
  //   } catch (error) {

  //   }
  // },
};

// mutations
const mutations = {
  SET_PRODUCTS_TO_STATE(state, products) {
    state.products = products;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
