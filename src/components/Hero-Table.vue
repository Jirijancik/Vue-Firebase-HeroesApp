<template>
  <div class="hero-table" v-if="!isLoading">
    <add-hero v-on:add-hero="handleAddHero" />
    <hero-list v-bind:heroListData="heroListData" />
  </div>
  <p v-else>LOADING</p>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import AddHero from "./Add-Hero";
import HeroList from "./Hero-List";

export default {
  components: { "add-hero": AddHero, "hero-list": HeroList },
  data() {
    return {
      isLoading: true,
      heroListData: []
    };
  },
  async created() {
    this.getHeresFromDb();
    this.isLoading = await false;          

  },
  methods: {
    handleAddHero(newHero) {
      this.addHeroToDb(newHero);
      this.getHeresFromDb();
      //this.heroListData = [...this.heroListData, newHero];
    },
    async addHeroToDb(newHero) {
      const USER_KEY = await firebase.auth().currentUser.uid;

      await firebase
        .database()
        .ref(`/users/${USER_KEY}/heroList`)
        .push(newHero)
        .then(() => {
          console.log("New Hero Added!");
        })
        .catch(error => console.log("Error when creating new Hero.", error));
    },
    async getHeresFromDb() {
      var userId = await firebase.auth().currentUser.uid;
      await firebase
        .database()
        .ref("/users/" + userId)
        .once("value")
        .then(snapshot => {
          this.heroListData = snapshot.val().heroList || "Add New Hero";
          console.log(snapshot.val().heroList);
        });
    }
  }
};
</script>

<style scoped>
.hero-table {
  background-color: #333;
  color: white;
}
</style>