import Vuex from 'vuex'
import axios from 'axios'

import { POST_URL, POST_ID_URL, FIREBASE_API_KEY } from '@/constants/db'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: ''
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
        }).catch(e => {
          console.log(e)
        })
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore