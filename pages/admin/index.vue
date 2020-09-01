<template>
  <div class="wrapper-admin">
    <section class="new-post">
      <AppButton type="button" @click="goToCreatePost">Create a post</AppButton>
    </section>
    <section class="existing-post">
      <h1>Existing posts</h1>
      <postList :isAdmin="isAdmin"/>
    </section>
  </div>
</template>

<script>
import postList from '@/components/posts/postList'
import AppButton from '@/components/uiComp/AppButton'
export default {
  components: {
    postList,
    AppButton
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
