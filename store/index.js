import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise ((resolve,reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'try with id 1-1',
                description: 'this is the desc id 1',
                url: 'https://i2.wp.com/files.123freevectors.com/wp-content/original/131565-pastel-pink-polygon-abstract-background.jpg?w=800&q=95'
              }, {
                id: '2',
                title: 'try with id 1-2',
                description: 'this is the desc id 2',
                url: 'https://i2.wp.com/files.123freevectors.com/wp-content/original/131565-pastel-pink-polygon-abstract-background.jpg?w=800&q=95'
              },
            ])
            resolve()
          }, 1000)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
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