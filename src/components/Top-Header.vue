<template>
  <div class="nav-bar">


    <div class="logged-msg" v-if="!isLoggedIn">

    </div>

    <div class="logged-msg" v-else>
      Logged as: {{user}}

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
      this.user = user.email;
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
}
</style>