<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "./style/variables.css";
#app {
  height: 100vh;
  background-color: var(--mainNavy);
  color: var(--white);
}
</style>
