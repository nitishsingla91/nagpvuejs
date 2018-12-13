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


store.dispatch('CHECK_AUTH')
  .then(() => {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      store,
      router,
      components: { App },
      template: '<App/>'
    })
  })