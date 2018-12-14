<template>
  <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
         
           <home-routing></home-routing>
        </div>

       

        <router-view></router-view>

      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            
              <template v-if="tags.isLoading">
              <p>Loading...</p>
            </template>
            
            <template v-else>
              <router-link
                v-for='tag in tags.data'
                :key="tag"
                :to="{path: '/tag/'+tag}"
                class="tag-pill tag-default">
                {{tag}}
              </router-link>
            </template>

          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>
<script>
import ApiService from '@/api'
import {FETCH_TAGS, FETCH_ARTICLES} from '@/store/actions.type'
import ArticlePreview from '@/components/ArticlePreview.vue'
import HomeRouting from '@/components/HomeRouting.vue'
export default {
  components: {
    ArticlePreview,
    HomeRouting
  },
  data () {
    return {}
  },
  created () {
     this.$store.dispatch(FETCH_TAGS)
    
    
  },
  computed: {
   
    tags () {
       return this.$store.state.home.tags
    }
  }
}
</script>