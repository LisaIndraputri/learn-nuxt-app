<template>
  <section class="featured-posts">
    <div class="featured-post-list" v-for="(data, index) in listPreview" :key="index">
      <postPreview :id="index+1" :data="data"/>
    </div>
  </section>
</template>

<script>
import postPreview from '@/components/posts/postPreview'
export default {
  components: {
    postPreview,
  },
  computed: {
    listPreview () {
      return [{
          title: 'try with id 1',
          description: 'this is the desc id 1',
          url: 'https://i2.wp.com/files.123freevectors.com/wp-content/original/131565-pastel-pink-polygon-abstract-background.jpg?w=800&q=95'
        }, {
          title: 'try with id 2',
          description: 'this is the desc id 2',
          url: 'https://i2.wp.com/files.123freevectors.com/wp-content/original/131565-pastel-pink-polygon-abstract-background.jpg?w=800&q=95'
        },
      ]
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
