import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "./assets/scss/style.scss";

Vue.config.productionTip = false;

console.log(process.env.WEBSITE);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
