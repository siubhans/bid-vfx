<template>
  <div>
    <sideBar v-if="loggedIn" />
    <mainHeading title="Studio" />
    <menuItem item-name="Link here" />
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import sideBar from "@/components/ui/side-bar.vue";
import mainHeading from "@/components/ui/main-heading.vue";
import menuItem from "@/components/ui/menu-item.vue";

export default {
  components: {
    sideBar,
    mainHeading,
    menuItem,
  },
  computed: {
    loggedIn() {
      return localStorage.signedIn == 1;
    },
    message() {
      return localStorage.message ? localStorage.message : "";
    },
  },
};
</script>

<style scoped></style>
