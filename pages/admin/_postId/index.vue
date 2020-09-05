<template>
  <div class="wrapper-single-existing-post">
    <div>{{loadedData.id}}</div>
    <postForm :data="loadedData" @submit="submit"/>
  </div>
</template>

<script>
import postForm from '@/components/admin/postForm'
import axios from 'axios'
import { POST_ID_URL } from '@/constants/db'
export default {
  layout: 'admin',
  middleware: 'auth',
  components: {
    postForm,
  },
  asyncData(context) {
    return axios.get(`${POST_ID_URL}${context.params.postId}.json`).then(res => {
      return {
        loadedData: { ...res.data, id: context.params.postId }
      }
    }).catch((e) => {
      context.error(e)
    })
  },
  methods: {
    submit (editedPost) {
      this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style>
.wrapper-single-existing-post {
  padding: 50px;
}
</style>
