<template>
  <div class="wrapper-single-post">
    <section class="post">
      <h1 class="post-title">Title of the post</h1>
      <div class="post-descriptions">
        <div class="post-description">Last updates on</div>
        <div class="post-description">written by Name</div>
      </div>
      <p>Content of the post</p>
    </section>
    <section class="post-feedback">
      <p>Let me know, send a mail to <a href="mailto:lala.gmail.com">lala@gmail.com</a></p>
    </section>
  </div>
</template>

<script>
export default {

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
