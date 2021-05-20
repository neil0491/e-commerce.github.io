// initial state
const state = () => ({
  isMobile: false,
  isDesktop: true,
});

// getters
const getters = {
  IS_MOBILE(state) {
    return state.isMobile;
  },
  IS_DESKTOP(state) {
    return state.isDesktop;
  },
};

// actions
const actions = {
  SET_MOBILE({ commit }) {
    commit("SWITCH_MOBILE");
  },
  SET_DESKTOP({ commit }) {
    commit("SWITCH_DESKTOP");
  },
};

// mutations
const mutations = {
  SWITCH_MOBILE: (state) => {
    state.isMobile = true;
    state.isDesktop = false;
  },
  SWITCH_DESKTOP: (state) => {
    state.isMobile = false;
    state.isDesktop = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
