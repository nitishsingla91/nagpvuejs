import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/user";
import articles from "./modules/articles";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    articles: [],
    tags: []
  },
  mutations: {
    getMultipleArticle (state, articles) {
      state.articles = articles
    },
    getHomeTags (state, tags) {
      state.tags = tags
    }
  },
  actions: {},
  modules: {
    users,
    articles
  }
});



