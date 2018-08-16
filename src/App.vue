<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from "./store/store.js";
export default {
  name: "App",
  store
};
</script>

<style>
@font-face {
  font-family: "ltxh";
  src: url("./assets/font/ltxh-GBK.ttf");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: ltxh;
  font-size: 0.18rem;
}
</style>
