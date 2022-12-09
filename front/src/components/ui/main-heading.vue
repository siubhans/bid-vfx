<template>
  <div>
    <h3 class="heading_main">{{ title.toUpperCase() }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.heading_main {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  letter-spacing: 0.6rem;
  font-size: calc(1rem + 1vw);
  font-weight: 100;
  opacity: 0.7;
}
</style>
