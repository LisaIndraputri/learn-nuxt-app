<template>
  <div class="wrapper-posts">
    <postList />
  </div>
</template>

<script>
import postList from '@/components/posts/postList'
export default {
  components: {
    postList,
  }
}
</script>

<style>
  .wrapper-posts {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }

</style>
