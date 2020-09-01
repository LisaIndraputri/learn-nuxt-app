<template>
  <div class="wrapper-landing-page">
    <section class="intro">
      <div class="landing-page-title">Get the latest updates!</div>
    </section>
    <section class="featured-posts">
      <div class="featured-post-list" v-for="(data, index) in listPreview" :key="index">
        <postPreview :id="index+1" :data="data"/>
      </div>
    </section>
  </div>
</template>

<script>
import postPreview from '@/components/posts/postPreview'
export default {
  components: {
    postPreview,
  },
  computed: {
    listPreview () {
      return [{
          title: 'try with id 1',
          description: 'this is the desc id 1',
          url: 'https://i2.wp.com/files.123freevectors.com/wp-content/original/131565-pastel-pink-polygon-abstract-background.jpg?w=800&q=95'
        }, {
          title: 'try with id 2',
          description: 'this is the desc id 2',
          url: 'https://i2.wp.com/files.123freevectors.com/wp-content/original/131565-pastel-pink-polygon-abstract-background.jpg?w=800&q=95'
        },
      ]
    }
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
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.featured-post-list {
  display: inherit;
}



</style>
