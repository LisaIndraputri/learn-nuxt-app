<template>
  <header class="header">
    <ul class="nav-items">
      <li>
        <nuxt-link to="/">HOME</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users">USERS</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
  }
</style>
