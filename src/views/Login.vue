<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="handleSubmit">
      <div class="email">
        <input type="email" v-model="email" placeholder="Login" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-if="error" class="error">{{error.message}}</div>
    <span>
      Dont have an account? Register
      <router-link to="/register">HERE</router-link>
    </span>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

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
          .signInWithEmailAndPassword(this.email, this.password);
        console.log("Login was Succes!", user);
        await this.$router.replace({ name: "secret" }).catch(err => {
          throw new Error(`Problem handling something: ${err}.`);
        });
      } catch (error) {
        console.log("login Failed!");
        console.log(error);
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