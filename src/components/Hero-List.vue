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
  props:["heroListData"]

};
</script>

<style scoped>
.hero-item {
  list-style-type: none;
  padding: 20px;
}
</style>>
