<template>
  <div>
    <sideBar v-if="loggedIn" />
    <mainHeading title="Studio" />
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import sideBar from "@/components/ui/side-bar.vue";
import mainHeading from "@/components/ui/main-heading.vue";

export default {
  components: {
    sideBar,
    mainHeading,
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
