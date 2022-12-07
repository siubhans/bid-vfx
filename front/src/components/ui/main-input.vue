<template>
  <span>
    <input class="main-input">{{ paceholder }}</h1>
  </span>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.heading_superior {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  letter-spacing: 0.8rem;
  font-size: calc(1rem + 1vw);
  font-weight: 100;
  opacity: 0.6;
  padding-top: 15vh;
}
</style>
