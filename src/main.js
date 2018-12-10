import Vue from "vue";
import App from "./App.vue";
import VueDevtools from "@vue/devtools";
import router from "@/router";
import store from "./store";
import ApiService from '@/api';

import '@/assets/main.css';

Vue.config.productionTip = false;
if (process.env.NODE_ENV === "development") {
  VueDevtools.connect();
}
ApiService.init()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
