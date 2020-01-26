<template>
  <div id="app">
    <top-header />
    <keep-alive include="login">
      <router-view />
    </keep-alive>
  </div>
</template>
  

  <script>
import TopHeader from "./components/Top-Header";

export default {
  components: { "top-header": TopHeader }
};
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
