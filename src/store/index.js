import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// TODO: https://medium.com/@abuoop123/why-getters-mutations-actions-in-vuex-store-77069710d2d5
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData:null,
    userName:null,
    heroList:null
  },
  getters:{
    getUser: state=>{
      return state.user;
    },
    getUserName: state=>{
      return state.userName;
    }
  },
  mutations: {
    SET_USER: (state, newUser) =>{
      state.user = newUser
    },
    SET_USER_NAME: (state) =>{
        state.userName = state.userData.userName;
    },
    SET_USER_DATA: (state, firebaseUserData) =>{
      state.userData = firebaseUserData;
      state.userName = state.userData.userName;
      state.heroList = state.userData.heroList;
      console.log(state.userData, state.userName, "YES")
    }
  },
  actions: {
    setUser: ({commit, state}, newUser) => {
      commit('SET_USER', newUser)
      return state.user
    },
    async setUserData(context) {
      let userId = await firebase.auth().currentUser.uid;
      let firebaseUserData = null;
      await firebase
        .database()
        .ref("/users/" + userId)
        .once("value")
        .then(snapshot => {
          firebaseUserData = snapshot.val();
        });
      context.commit("SET_USER_DATA", firebaseUserData);
    }
  },
  modules: {
  }
})
