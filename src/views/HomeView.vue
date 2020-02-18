<template>
  <div>
    <h1>Home Feed</h1>
    <p>You logged in and now are browsing content</p>
    <hero-table/>
  </div>
</template>

<script>
import HeroTable from "../components/Hero-Table";

export default {
  components: { "hero-table": HeroTable }
};
</script>

<style lang="scss" scoped>
</style>