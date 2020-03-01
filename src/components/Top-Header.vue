<template>
  <div class="nav-bar">


    <div class="logged-msg" v-if="!isLoggedIn">

    </div>

    <div class="profile-component" v-else>
      Logged as:
      <router-link to="/profile">
      <button>{{getUserName()}}</button>
      </router-link >
      <div>
        <button @click="handleSignOut">Sing Out</button>
      </div>
      
    </div>



  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.isLoggedIn = !!user;
      if(this.isLoggedIn){
        this.user = user;
        
      }
      this.setUserDataState();
    });
  },
  data() {
    return {
      isLoggedIn: false,
      user:'',
    };
  },
  methods: {
      ...mapGetters(['getUserName']),
      ...mapMutations(['SET_USER_DATA']),
      ...mapActions(['setUserData']),
      setUserDataState(){
        this.setUserData();
      },
      async handleSignOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "login" });
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed:{
    ...mapState([
      'userName'
    ])
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