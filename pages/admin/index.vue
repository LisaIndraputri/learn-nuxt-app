<template>
  <div class="wrapper-admin">
    <section class="new-post">
      <button @click="goToCreatePost">Create a post</button>
    </section>
    <section class="existing-post">
      <h1>Existing posts</h1>
      <postList :isAdmin="isAdmin"/>
    </section>
  </div>
</template>

<script>
import postList from '@/components/posts/postList'
export default {
  components: {
    postList,
  },
  data () {
    return {
      isAdmin: true,
    }
  },
  methods: {
    goToCreatePost () {
      this.$router.push('/admin/new-post')
    }
  }
}
</script>

<style>
.wrapper-admin {
  padding: 50px;
}
.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}
.existing-post {
  text-align: center;
}
</style>
