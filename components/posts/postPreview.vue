<template>
  <nuxt-link :to="getLink" class="post-preview">
    <article>
      <div class="post-thumbnail" :style="getUrl"></div>
      <div class="post-content">
        <h1> {{data.title}} </h1>
        <p> {{ data.description }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview', 
  props: {
    id: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getLink () {
      return this.isAdmin ? `/admin/${this.id}` : `/posts/${this.id}`
    },
    getUrl () {
      const url = this.data.url || 'https://files.123fr`eevectors.com/wp-content/original/131824-white-and-gold-polygon-background-graphic-design.jpg'
      return `background-image: url(${url})`
    }
  }
}
</script>

<style>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}

</style>
