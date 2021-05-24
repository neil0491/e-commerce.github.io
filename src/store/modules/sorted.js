// initial state
const state = () => ({
  brands: [],
  minPrice: null,
  maxPrice: null,
  submitPrice: false,
});

// getters
const getters = {
  GET_ID_BRANDS(state) {
    return state.brands;
  },
  GET_MIN_PRICE(state) {
    return state.minPrice;
  },
  GET_MAX_PRICE(state) {
    return state.maxPrice;
  },
  GET_SUBMIT_PRICE(state) {
    return state.submitPrice;
  },
};

// actions
// const actions = {};

// mutations
const mutations = {
  SET_ID_BRANDS(state, checked) {
    state.brands = checked;
  },
  SET_MIN_PRICE(state, minPrice) {
    state.minPrice = minPrice;
  },
  SET_MAX_PRICE(state, maxPrice) {
    state.maxPrice = maxPrice;
  },
  SET_SUBMIT_PRICE(state) {
    state.submitPrice = true;
  },
  CLEAR_SUBMIT_PRICE(state) {
    state.submitPrice = false;
  },
};

export default {
  state,
  getters,
  // actions,
  mutations,
};
