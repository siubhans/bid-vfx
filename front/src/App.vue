<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import SvgIcon from "vue3-icon";

export default {
  setup() {
    return {
      SvgIcon,
    };
  },
};
</script>

<style>
@import "./style/variables.css";

#app {
  height: 100vh;
  background-color: var(--mainNavy);
  color: var(--white);
}
</style>
