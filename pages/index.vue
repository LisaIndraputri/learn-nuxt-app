<template>
  <div class="wrapper-landing-page">
    <section class="intro">
      <div class="landing-page-title">Get the latest updates!</div>
    </section>
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
.intro {
  height: 300px;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-image: url('~assets/images/background-main-page.jpg');
  background-size: cover;
}
.intro .landing-page-title {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}
@media (min-width: 768px) {
  .intro .landing-page-title {
    font-size: 2rem;
  }
}

</style>
