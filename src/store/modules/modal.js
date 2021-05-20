// initial state
const state = () => ({
  modalEnter: false,
  modalRegistration: false,
  menu: false,
});

// getters
const getters = {
  GET_IS_MODAL(state) {
    return state.modalEnter;
  },
  GET_IS_MODAL_REGISTRATION(state) {
    return state.modalRegistration;
  },
  GET_MENU(state) {
    return state.menu;
  },
};

// actions
const actions = {
  OPEN_MODAL({ commit }) {
    commit("STATE_OPEN_MODAL");
  },
  CLOSE_MODAL({ commit }) {
    commit("STATE_CLOSE_MODAL");
  },
  OPEN_REGISTRATION({ commit }) {
    commit("STATE_OPEN_REGISTRATION");
  },
  CLOSE_REGISTRATION({ commit }) {
    commit("STATE_CLOSE_REGISTRATION");
  },
  OPEN_MENU({ commit }) {
    commit("STATE_OPEN_MENU");
  },
  CLOSE_MENU({ commit }) {
    commit("STATE_CLOSE_MENU");
  },
};

// mutations
const mutations = {
  STATE_OPEN_MODAL(state) {
    state.modalEnter = true;
  },
  STATE_CLOSE_MODAL(state) {
    state.modalEnter = false;
  },
  STATE_OPEN_REGISTRATION(state) {
    state.modalRegistration = true;
  },
  STATE_CLOSE_REGISTRATION(state) {
    state.modalRegistration = false;
  },
  STATE_OPEN_MENU(state) {
    state.menu = true;
  },
  STATE_CLOSE_MENU(state) {
    state.menu = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
