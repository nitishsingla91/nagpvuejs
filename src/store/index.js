import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/user";
import articles from "./modules/articles";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    articles
  }
});
