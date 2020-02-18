import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import Profile from "../views/ProfileSettingsView.vue";

import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const _requiresAuth = to.matched.some(record=> record.meta.requiresAuth);
//   const isAuthenticated = firebase.auth().currentUser;
//   if(_requiresAuth && !isAuthenticated){
//     console.log("Acces Denied");
//     next("/login");
//   }else{
//     console.log("Acces Granted")
//     next();
//   }
// });

// export default router;

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
