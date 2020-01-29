<template>
  <div class="hero-table">
    <add-hero v-on:add-hero="handleAddHero" />
    <hero-list v-bind:heroListData="heroListData" />
  </div>
</template>

<script>
import AddHero from "./Add-Hero";
import HeroList from "./Hero-List";

export default {
  components: { "add-hero": AddHero, "hero-list": HeroList },
  data() {
    return {
      heroListData: [
        {
          name: "Barbar",
          age: 25,
          id: 1
        },
        {
          name: "Xena",
          age: 25,
          id: 2
        },
        {
          name: "Traktor",
          age: 25,
          id: 3
        },
        {
          name: "Dežot",
          age: 25,
          id: 4
        }
      ]
    };
  },
  methods: {
    handleAddHero(newHero) {
      this.heroListData = [...this.heroListData, newHero];
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