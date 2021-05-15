// initial state
const state = () => ({
  category: [],
  categories: [],
  errorCategories: null,
  errorCategory: null,
});

// getters
const getters = {
  GET_ALL_CATEGORIES(state) {
    return state.categories;
  },
  GET_CATEGORY(state) {
    return state.category;
  },
};

// actions
const actions = {
  async FETCH_ALL_CATEGORIES({ commit }) {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const categories = await res.json();
      commit("SET_CATEGORIES_TO_STATE", categories);
    } catch (error) {
      commit("SET_CATEGORIES_ERROR", error);
      console.log(error);
    }
  },
  async FETCH_CATEGORY({ commit }, id) {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${id}`
      );
      const category = await res.json();
      commit("SET_CATEGORY_TO_STATE", category);
    } catch (error) {
      commit("SET_CATEGORY_ERROR", error);
      console.log(error);
    }
  },
};

// mutations
const mutations = {
  SET_CATEGORIES_TO_STATE(state, categories) {
    state.categories = categories;
  },
  SET_CATEGORIES_ERROR(state, error) {
    state.errorCategories = error;
  },
  SET_CATEGORY_TO_STATE(state, category) {
    state.category = category;
  },
  SET_CATEGORY_ERROR(state, error) {
    state.errorCategory = error;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
