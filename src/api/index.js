import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {getJWTFromStorage} from '@/api/storage'

export const API_URL = 'https://conduit.productionready.io/api'


const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  setHeader () {
    const token = getJWTFromStorage()
    if (token) {
      Vue.axios.defaults.headers.common['Authorization'] = `Token ${token}`
    } else {
      delete Vue.axios.defaults.headers.common['Authorization']
    }
  },

  query (resource, params) {
    return Vue.axios
      .get(resource, {params})
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  get (resource, slug = '') {
    return Vue.axios
      .get(`${resource}/${slug}`)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  update (resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params)
  },

  put (resource, params) {
    return Vue.axios
      .put(`${resource}`, params)
  },

  delete (resource) {
    return Vue.axios
      .delete(resource)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  }
}

export default ApiService

export const TagsService = {
  get () {
    return ApiService.get('tags')
  }
}

export const HomeArticles = {
  get (params) {
    return ApiService.query('articles', params)
  },
  getFeed (params) {
    return ApiService.query('articles/feed', params)
  }
}

export const Article = {
  get (slug) {
    return ApiService.get(`articles/${slug}`)
  },
  favorite (slug) {
    return ApiService.post(`articles/${slug}/favorite`)
  },
  unFavorite (slug) {
    return ApiService.delete(`articles/${slug}/favorite`)
  },
  getComment (slug) {
    return ApiService.get(`articles/${slug}/comments`)
  },
  addComment (slug, comment) {
    return ApiService.post(`articles/${slug}/comments`, {
      comment: {body: comment}
    })
  },
  removeComment (slug, id) {
    return ApiService.delete(`articles/${slug}/comments/${id}`)
  },
  deleteArticle (slug) {
    return ApiService.delete(`articles/${slug}`)
  },
  updateArticle (slug, article) {
    return ApiService.put(`articles/${slug}`, {article})
  },
  createArticle (article) {
    return ApiService.post('articles', {article})
  }
}

export const Auth = {
  login (user) {
    return ApiService.post('users/login', user)
  },
  register (user) {
    return ApiService.post('users', user)
  },
  get () {
    return ApiService.get('user')
  },
  put (user) {
    return ApiService.put('user', user)
  },
  updateProfile (user) {
    return ApiService.put('user', {user})
  }
}

export const Profile = {
  get (username) {
    return ApiService.get(`profiles/${username}`)
  },
  follow (username) {
    return ApiService.post(`profiles/${username}/follow`)
  },
  unFollow (username) {
    return ApiService.delete(`profiles/${username}/follow`)
  }
  
}
