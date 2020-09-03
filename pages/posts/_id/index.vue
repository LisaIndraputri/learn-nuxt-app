<template>
  <div class="wrapper-single-post">
    <section class="post">
      <h1 class="post-title">{{ data.title }}</h1>
      <div class="post-descriptions">
        <div class="post-description">Last updates on {{ data.updatedDate }}</div>
        <div class="post-description">written by{{ data.author }}</div>
      </div>
      <p>{{ data.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know, send a mail to <a href="mailto:lala.gmail.com">lala@gmail.com</a></p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            id: '1',
            title: `try with id ${context.route.params.id}`,
            description: 'this is the desc id 1',
            content: 'abcd efgh ijkl',
            url: 'https://i2.wp.com/files.123freevectors.com/wp-content/original/131565-pastel-pink-polygon-abstract-background.jpg?w=800&q=95',
            author: 'lala',
            updatedDate: new Date(),
  
          }
        })
      }, 1000)
    })
      .then(data => {
        return data
      })
      .catch((e) => {context.error(new Error())})
  },
}
</script>

<style>
  .wrapper-single-post {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }
  .post {
    text-align: center;
    width: 80%;
  }
  .post-descriptions {
    padding-bottom: 10px;
    border-bottom: 5px solid grey;
    margin-bottom: 10px;
  }
  .post-feedback {
    text-align: center;
    width: 80%;
  }
  .post-feedback p a {
    color: red;
    text-decoration: none;
  }

</style>
