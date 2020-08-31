<template>
  <div>
    <input type="text" v-model="userId">
    <button @click="onLoad">Load User</button>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: ''
    }
  },
  methods: {
    onLoad () {
      this.$router.push(`/users/${this.userId}`)
    }
  }

}
</script>

<style>

</style>
