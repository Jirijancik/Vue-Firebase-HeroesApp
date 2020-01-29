<template>
  <div>
    <form @submit.prevent="addHero" class="add-hero-form">
      <div class="add-hero-input">
        <input type="text" v-model="heroName" placeholder="Add Hero" name="Hero input" />
      </div>
      <button type="submit">ADD HERO</button>
    </form>
  </div>
</template>

<script>
//dimport * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import uuid from 'uuid';

export default {
  data() {
    return {
      heroName: ""
    };
  },
  methods: {
    addHero(e) {
            const newHero = {
                name:this.heroName,
                id: uuid.v4()
            }

            this.$emit('add-hero', newHero);

            e.target.reset();
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