<template>
  <h1>Single user with id: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate (data) {
    return /^\d+$/.test(data.params.id)
  }

}
</script>

<style>

</style>
