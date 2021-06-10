import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createProvider } from "./vue-apollo";
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;

import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "./assets/scss/style.scss";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

const token = Cookies.get("user");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
  store.commit("setUser", JSON.parse(token));
}
new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
