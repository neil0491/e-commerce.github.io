// initial state
const state = () => ({
  brands: [],
});

// getters
const getters = {
  GET_ID_BRANDS(state) {
    return state.brands;
  },
};

// actions
// const actions = {};

// mutations
const mutations = {
  SET_ID_BRANDS(state, checked) {
    state.brands = checked;
  },
};

export default {
  state,
  getters,
  // actions,
  mutations,
};
