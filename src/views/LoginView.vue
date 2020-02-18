<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="handleSubmit">
      <div class="email">
        <input type="email" v-model="email" placeholder="Login" name="email"/>
      </div>

      <div class="password">
        <input type="password" v-model="password" placeholder="Password" name="password"/>
      </div>

      <button type="submit">Login</button>
      
    </form>
    <div v-if="error" class="error">{{error.message}}</div>
    <span>
      Dont have an account? Register
      <router-link to="/register">HERE</router-link>
      !
    </span>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name:"login",
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
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // New sign-in will be persisted with session persistence.
            console.log(this.email);
            return firebase.auth().signInWithEmailAndPassword(this.email, this.password);
          });

        await this.$router.replace({ name: "home" }).catch(err => {
          throw new Error(`Problem handling something: ${err}.`);
        });
      } catch (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("Something went wrong while singing in the user. Error -" + errorCode + ": " + errorMessage);
      }
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