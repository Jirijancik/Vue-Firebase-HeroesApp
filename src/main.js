import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/database';

Vue.config.productionTip = false

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkR969umoIpRJHc4ZYcdSwd_3f8JMiPsk",
  authDomain: "vue-login-965b1.firebaseapp.com",
  databaseURL: "https://vue-login-965b1.firebaseio.com",
  projectId: "vue-login-965b1",
  storageBucket: "vue-login-965b1.appspot.com",
  messagingSenderId: "382061079245",
  appId: "1:382061079245:web:61777d6c6591f892155784"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the database service

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});


// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");