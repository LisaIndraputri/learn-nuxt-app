<template>
  <div class="wrapper-auth">
    <div class="auth-form">
      <form @submit.prevent="onSubmit">
        <InputForm type="email" v-model="email">E-Mail Address</InputForm>
        <InputForm type="password" v-model="password">Password</InputForm>
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
import axios from 'axios'
import { FIREBASE_API_KEY } from '@/constants/db'
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`, {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      }).then(res => {
        console.log(res, 'ini res submit')
      }).catch(e => {
        console.log(e)
      })
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
