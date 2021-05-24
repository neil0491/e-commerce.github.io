import Cookies from "js-cookie";
import cookieparser from "cookieparser";

// Defining an empty state
const state = () => ({
  user: {},
});

// Define a getter in order to get your current username from your state
const getters = {
  username: (state) => {
    console.log(state.user);
    return state.user.username;
  },
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null;
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      user = (parsed.user && JSON.parse(parsed.user)) || null;
    }
    console.log(user);
    commit("setUser", user);
  },
};

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
