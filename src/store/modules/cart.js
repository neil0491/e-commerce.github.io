const mutations = {
  SET_CART(state, product) {
    if (state.cartItems.length) {
      let isproductExist = false;
      state.cartItems.map((item) => {
        if (item.id === product.id) {
          isproductExist = true;
          item.quantity++;
        }
      });
      if (!isproductExist) {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    } else {
      state.cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("carts", JSON.stringify(state.cartItems));
  },
  REMOVE_FROM_CART(state, index) {
    state.cartItems.splice(index, 1);
    localStorage.setItem("carts", JSON.stringify(state.cartItems));
  },
  DECCREMENT(state, index) {
    if (state.cartItems[index].quantity > 1) {
      state.cartItems[index].quantity--;
    }
  },
  INCREMENT(state, index) {
    state.cartItems[index].quantity++;
  },
  CHANGE(state) {
    state.isCartState = !state.isCartState;
  },
};

const actions = {
  ADD_TO_CART({ commit }, product) {
    commit("SET_CART", product);
  },
  DELETE_FROM_CART({ commit }, index) {
    commit("REMOVE_FROM_CART", index);
  },
  DECCREMENT_CART_ITEM({ commit }, index) {
    commit("DECCREMENT", index);
  },
  INCREMENT_CART_ITEM({ commit }, index) {
    commit("INCREMENT", index);
  },
  CHANGE_STATE_CART({ commit }) {
    commit("CHANGE");
  },
};

const getters = {
  CART_TOTAL_PRICE: ({ cartItems }) =>
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0),
  CART_COUNT: ({ cartItems }) => cartItems.length,
  CART_ITEMS: ({ cartItems }) => cartItems,
  IS_CART_STATE: ({ isCartState }) => isCartState,
  // GET_TOTAL_CART: ({ cartItems }) => {
  //   const tottal = cartItems.reduce((total, item) => total + item.quantity, 0);
  //   return tottal;
  // },
};

const state = () => ({
  cartItems: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
  isCartState: false,
});

export default {
  mutations,
  actions,
  getters,
  state,
};
