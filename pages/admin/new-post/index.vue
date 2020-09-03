<template>
  <div class="wrapper-new-post">
    <postForm @submit="submit"/>
  </div>
</template>

<script>
import axios from 'axios'
import postForm from '@/components/admin/postForm'
import { POST_URL } from '@/constants/db'
export default {
  layout: 'admin',
  components: {
    postForm,
  },
  methods: {
    submit (postData) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style>
.wrapper-new-post {
  padding: 50px;
}
</style>
