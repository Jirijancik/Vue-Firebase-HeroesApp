<template>
  <div class="nav-bar">


    <div class="logged-msg" v-if="!isLoggedIn">

    </div>

    <div class="profile-component" v-else>
      Logged as:
      <router-link to="/profile">
      <button>{{user.userName}}</button>
      </router-link >
      <div>
        <button @click="handleSignOut">Sing Out</button>
      </div>
      
    </div>



  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.isLoggedIn = !!user;
      if(this.isLoggedIn){
        this.user = user;
      }
    });
  },
  data() {
    return {
      isLoggedIn: false,
      user:''
    };
  },
  methods: {
    async handleSignOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "login" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: grid;
  background-color: #333;
  height: 65px;
  color: white;
  width: 100%;
}
.profile-component{
  position: relative;
  float: right;
  width: 400px;
  margin-left: auto;
  margin-right: 0;
  right: 0;
}
</style>