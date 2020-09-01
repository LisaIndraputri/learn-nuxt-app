<template>
  <div class="wrapper-new-post">
    <postForm />
  </div>
</template>

<script>
import postForm from '@/components/admin/postForm'
export default {
  components: {
    postForm,
  },
}
</script>

<style>
.wrapper-new-post {
  padding: 50px;
}
</style>
