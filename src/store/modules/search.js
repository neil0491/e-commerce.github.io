// initial state
const state = () => ({
  focusedSearch: false,
  inputSerch: "",
});

// getters
const getters = {
  GET_INPUT_SEARCH(state) {
    return state.inputSerch;
  },
  GET_FOCUS_SEARCH(state) {
    return state.focusedSearch;
  },
};

// actions
// const actions = {};

// mutations
const mutations = {
  SET_INPUT_SEARCH(state, input) {
    state.inputSerch = input;
  },
  SET_FOCUS_SEARCH(state, focus) {
    state.focusedSearch = focus;
  },
};

export default {
  state,
  getters,
  // actions,
  mutations,
};
