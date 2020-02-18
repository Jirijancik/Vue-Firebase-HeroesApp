<template>
    <div>
        {{user}}
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
      user:''
    };
  },
}
</script>

<style lang="scss" scoped>

</style>