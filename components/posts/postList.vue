<template>
  <section class="featured-posts">
    <div class="featured-post-list" v-for="(data, index) in listPreview" :key="index">
      <postPreview :id="index+1" :data="data" :isAdmin="isAdmin"/>
    </div>
  </section>
</template>

<script>
import postPreview from '@/components/posts/postPreview'
export default {
  components: {
    postPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    listPreview () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.featured-post-list {
  display: inherit;
}
</style>
