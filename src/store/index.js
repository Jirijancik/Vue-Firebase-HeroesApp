import Vue from 'vue'
import Vuex from 'vuex'
// TODO: https://medium.com/@abuoop123/why-getters-mutations-actions-in-vuex-store-77069710d2d5
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  getters:{
    getUser: state=>{
      return state.user;
    }
  },
  mutations: {
    SET_USER: (state, newUser) =>{
      state.user = newUser
    }
  },
  actions: {
    setUser: ({commit, state}, newUser) => {
      commit('SET_USER', newUser)
      return state.user
    }
  },
  modules: {
  }
})
