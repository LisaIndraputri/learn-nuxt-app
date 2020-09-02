<template>
  <div class="wrapper-error">
    <h1>Oops, something went wrong!</h1>
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper-error {
  text-align: center;
}

.wrapper-error a {
  text-decoration: none;
  color: red;
}

.wrapper-error a:hover,
.wrapper-error a:active {
  color: salmon;
}

</style>
