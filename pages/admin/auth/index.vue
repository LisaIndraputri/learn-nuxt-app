<template>
  <div class="wrapper-auth">
    <div class="auth-form">
      <form>
        <InputForm type="email">E-Mail Address</InputForm>
        <InputForm type="password">Password</InputForm>
        <SuperButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</SuperButton>
        <SuperButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</SuperButton>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style>
.wrapper-auth {
  padding: 20px;
}

.auth-form {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

</style>
