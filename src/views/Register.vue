<template>
  <div>
    <h1>Register</h1>
    <div v-if="error" class="error">{{error.message}}</div>
    <form @submit.prevent="handleSubmit">
      <div class="email">
        <input type="email" v-model="email" placeholder="Email" name="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="Password" name="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const user = await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // New sign-in will be persisted with session persistence.
            return firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password);
          });

         await this.storeUsersProfile(user.user.uid ,user.user.email);

        await this.$router.replace({ name: "home" }).catch(err => {
          throw new Error(`Problem handling something: ${err}.`);
        });
      } catch (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(
          "Something went wrong while registering the user. Error -" +
            errorCode +
            ": " +
            errorMessage
        );
      }
    },
    async storeUsersProfile(userId, email) {
      // Get a reference to the database service
      let database = firebase.database();
      // save the user's profile into Firebase so we can list users,
      // use them in Security and Firebase Rules, and show profiles
      firebase
        .database()
        .ref("users/" + userId)
        .set({
         // username: name,
          email: email
          //some more user data
        });
      console.log("userId: " + userId + "Email: " + email, database)
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}
input {
  padding: 30px;
  width: 400px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>