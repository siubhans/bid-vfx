<template>
  <div class="flexContainer">
    <b-button
      class="menuItem__button"
      :class="buttonColor"
      :href="'/' + itemName"
      >{{ itemName }}</b-button
    >
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    itemName: String,
    buttonColor: String
  }
};
</script>

<style>
.flexContainer {
  display: flex;
  justify-content: center;
}

.menuItem__button {
  border-radius: 6px;
  border: 3px solid var(--white);
  width: 90%;
  font-size: 1.25rem;
}

.grey__button {
  background-color: var(--mediumBlue);
  margin-bottom: 20px;
}
.green__button {
  background-color: var(--green);
  margin-bottom: 40px;
}
</style>
