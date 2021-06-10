import Cookies from "js-cookie";

// Defining an empty state
const state = () => ({
  user: {},
});

// Define a getter in order to get your current username from your state
const getters = {
  username: (state) => {
    return state.user && state.user.username;
  },
  GET_USER: (state) => {
    return state.user;
  },
};

export const actions = {};

// Create a mutation that set a user to your state and in a 'user' cookie
const mutations = {
  setUser(state, user) {
    state.user = user;
    Cookies.set("user", user);
  },
  logout(state) {
    state.user = null;
    Cookies.set("user", null);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
