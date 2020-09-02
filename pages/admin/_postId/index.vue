<template>
  <div class="wrapper-single-existing-post">
    <postForm :data="loadedData"/>
  </div>
</template>

<script>
import postForm from '@/components/admin/postForm'
export default {
  layout: 'admin',
  components: {
    postForm,
  },
  data () {
    return {
      loadedData: {
        author: 'my Name',
        title: 'post it',
        thumbnailLink: 'this is link',
        content: 'abcd efgh ijkl'
      }
    }
  }
}
</script>

<style>
.wrapper-single-existing-post {
  padding: 50px;
}
</style>
