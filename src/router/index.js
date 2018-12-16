import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import HomeFeed from '@/views/HomeFeed'
import HomeTag from '@/views/HomeTag'
import HomeGlobal from '@/views/HomeGlobal'
import MyArticles from '@/views/MyArticles'
import MyFavorite from '@/views/MyFavorite'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {path: '/', component: HomeGlobal, name: 'Home'},
        {path: 'feed', component: HomeFeed},
        {path: 'tag/:tag', component: HomeTag}
      ]
    },
    {
     
      path: '/articles/:slug',
      name: 'Article',
      component: () => import("@/views/Article.vue"),
      props: true
    },
    {
      path: '/editor/:slug?',
      name: 'Editor',
      component: () => import("@/views/Editor.vue")
    },
    {
      path: '/login',
      name: 'SignIn',
      component: () => import("@/views/Login.vue")
    },
    {
      path: '/register',
      name: 'SignUp',
      component: () => import("@/views/Register.vue")
    },
    {
      path: '/setting',
      name: 'Setting',
      component: () => import("@/views/Settings.vue")
    },
    {
      path: '/profile/:username',
      name: 'Profile',
      component: () => import("@/views/Profile.vue"),
      props: true,
      children: [
        {path: '', component: MyArticles, name: 'MyArticles'},
        {path: 'favorited', component: MyFavorite, name: 'MyFavorite'}
      ]
    }
  ]
})
