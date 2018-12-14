import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import HomeFeed from '@/views/HomeFeed'
import HomeTag from '@/views/HomeTag'
import HomeGlobal from '@/views/HomeGlobal'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {path: '/', component: HomeGlobal, name: 'Home'},
        {path: 'feed', component: HomeFeed},
        {path: 'tag/:tag', component: HomeTag}
      ]
    }, 
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/Register.vue")
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("@/views/Settings.vue")
    },
    {
      path: "/editor",
      name: "editor_new",
      component: () => import("@/views/ArticleCreate.vue")
    },
    {
      path: "/editor/:article_slug",
      name: "editor_edit",
      component: () => import("@/views/ArticleEdit.vue")
    },
    {
      path: "/articles/:article_slug",
      name: "article",
      props: true,
      component: () => import("@/views/Article.vue")
    },
    {
      path: "/:username",
      name: "profile",
      props: true,
      component: () => import("@/views/Profile.vue")
    }
  ]
});
