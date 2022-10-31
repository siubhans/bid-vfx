<template>
  <div>
    <b-button :href="'/' + itemName">{{ itemName }}</b-button>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    itemName: String
  }
};
</script>

<style scoped></style>
