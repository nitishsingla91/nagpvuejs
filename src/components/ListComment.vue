<template>
  <div class="cards" v-if="comments.data.length">
    <comment v-for="comment in comments.data" :key="comment.id" :slug="slug" class="card" :comment="comment">
    </comment>
  </div>
</template>
<script>
import Comment from '@/components/Comments'
export default {
  components: {
    Comment
  },
  props: {
    comments: {
      type: Object,
      default: function () {
        return {}
      }
    },
    slug: {
      type: String,
      default: ''
    }
  }
}
</script>