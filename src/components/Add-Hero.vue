<template>
  <div>
    <form @submit.prevent="handleSubmit" class="add-hero-form">
      <div class="add-hero-input">
        <input type="text" v-model="hero" placeholder="Add Hero" name="Hero input" />
      </div>
      <button type="submit">ADD HERO</button>
    </form>
  </div>
</template>

<script>
//dimport * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default {
  data() {
    return {
      hero: ""
    };
  },
  methods: {
    handleSubmit() {
      console.log("New Hero Was Added: " + this.hero);

    //   var userId = firebase.auth().currentUser.uid;
    //   //Get the user data
    //   return firebase
    //     .database()
    //     .ref("/users/" + userId)
    //     .once("value")
    //     .then(function(snapshot) {
    //         console.log(snapshot)
    //       //Do something with your user data located in snapshot
    //     });
    }
  }
};
</script>