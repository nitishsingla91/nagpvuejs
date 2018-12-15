import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import HomeFeed from '@/views/HomeFeed'
import HomeTag from '@/views/HomeTag'
import HomeGlobal from '@/views/HomeGlobal'

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
      path: '/articles/:id',
      component: () => import("@/views/Article.vue"),
      props: true
    },
    {
      path: '/editor/',
      name: 'CreateArticle',
      component: () => import("@/views/ArticleEdit.vue")
    },
    {
      path: '/editor/:id',
      component: () => import("@/views/ArticleEdit.vue")
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
      props: true
    }
  ]
})
