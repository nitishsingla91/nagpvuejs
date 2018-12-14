<template>
  <div class="article-page">

<div class="banner">
      <div class="container" v-if="article.isLoading">
        Is loading...
      </div>
      <div v-else class="container">
        <h1>{{article.data.title}}</h1>

 
       <article-data
          :article="article.data"
        >
        </article-data>
      </div>
    </div>

   <div class="container page">

    <div class="row article-content">
        <div v-if="!article.isLoading" class="col-md-12">
          {{article.data.body}}
        </div>
        <div v-else>
          Is loading...
        </div>
      </div>

     <hr />

      <div class="article-actions">
        <template v-if="!article.isLoading">
          <article-data
            :article="article.data"
          >
          </article-data>
        </template>
        <template v-else>
          Is Loading...
        </template>
      </div>

       <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <template v-if="isLogin">
            <comment-editor :slug="article.data.slug" :author="article.data.author"></comment-editor>
          </template>
          <template v-else>
            <p style="display: inherit;">
              <router-link :to="{name: 'login'}">Sign in</router-link>
               or
              <router-link :to="{name: 'register'}">sign up</router-link> to add comments on this article.
            </p>
          </template>
          <list-comment :comments="comments" :slug="article.data.slug"></list-comment>
        </div>

        
      </div>

    </div>
</div>
</template>
<script>
import {mapState} from 'vuex'
import {FETCH_ARTICLE, FETCH_COMMENT} from '@/store/actions.type'
import ArticleData from '@/components/ArticleData'
import ListComment from '@/components/ListComment'
import CommentEditor from '@/components/CommentEditor'
export default {
   props: ['id'],
  components: {
    ArticleData,
    ListComment,
    CommentEditor
  },
 computed: {
    ...mapState({
      article: state => state.article.article,
      comments: state => state.article.comments
    }),
    isLogin () {
      return this.$store.state.authentication.isLogin
    }
  },
  mounted () {
  this.$store.dispatch(FETCH_ARTICLE, this.id)
    this.$store.dispatch(FETCH_COMMENT, this.id)
  }
}
</script>