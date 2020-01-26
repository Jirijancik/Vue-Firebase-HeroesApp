<template>
  <div>
    <ul v-for="hero in heroListData" v-bind:key="hero.id">
      <hero-item :itemData="hero"/>
    </ul>
  </div>
</template>

<script>
import HeroItem from './Hero-Item';

export default {
  components: {"hero-item": HeroItem},
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
  }
};
</script>

<style scoped>
.hero-item {
  list-style-type: none;
  padding: 20px;
}
</style>>
