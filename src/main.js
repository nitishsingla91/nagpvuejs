// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueDevtools from "@vue/devtools";
import router from './router'
import ApiService from '@/api'
import store from '@/store'
import '@/assets/main.css';

Vue.config.productionTip = false
if (process.env.NODE_ENV === "development") {
  VueDevtools.connect();
}
ApiService.init()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


