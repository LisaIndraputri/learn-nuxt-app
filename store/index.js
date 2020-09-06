import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

import { POST_URL, POST_ID_URL, FIREBASE_API_KEY } from '@/constants/db'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
      },
      addPost (state, post) {
        state.loadedPosts.push(post)
      },
      editPost (state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      },
      setToken (state, token) {
        state.token = token
      },
      clearToken (state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return axios.get(POST_URL).then(res => {
          const postArray = []
          for (const key in res.data) {
            postArray.push({ ...res.data[key], id: key })
          }
          vuexContext.commit('setPosts', postArray)
        }).catch(e => {
          context.error(e)
        })
      },
      addPost (vuexContext, post) {
        const data = {
          ...post,
          updatedDate: new Date()
        }
        return axios.post(`${POST_URL}?auth=${vuexContext.state.token}`, data).then(res => {
          console.log(res, 'ini res')
          vuexContext.commit('addPost', { ...data, id: res.data.name})
        }).catch(e => {
          console.log(e)
        })
      },
      editPost (vuexContext, post) {
        return axios.put(`${POST_ID_URL}${post.id}.json?auth=${vuexContext.state.token}`, post).then(res => {
          console.log(res)
          vuexContext.commit('editPost', post)
        }).catch(e => {
          console.log(e)
        })
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      authenticateUser(vuexContext, authData) {
        let uri = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`
        if (!authData.isLogin) {
          // SIGN UP
          uri = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`
        } 
        return axios.post(uri, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }).then(res => {
          console.log(res, 'ini res submit')
          vuexContext.commit('setToken', res.data.idToken)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(res.data.expiresIn) * 1000)
          Cookie.set('jwt', res.data.idToken)
          Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(res.data.expiresIn) * 1000)
        }).catch(e => {
          console.log(e)
        })
      },
      setLogoutTimer (vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
      },
      initAuth (vuexContext, req) {
        let token
        let expirationDate
        if (req) {
          if (!req.headers.cookie) {
            return 
          }
          const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
          if (!jwtCookie) {
            return
          }
          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split('=')[1]
        } else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
  
        }
        if (new Date().getTime() > +expirationDate || !token) {
          vuexContext.dispatch('logout')
          return 
        }
        vuexContext.commit('setToken', token)
      },
      logout (vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore