<template>
  <div>
    <sideBar v-if="loggedIn" />
    studio
  </div>
</template>

<script>
import sideBar from "@/components/ui/side-bar.vue";

export default {
  components: {
    sideBar,
  },
  computed: {
    loggedIn() {
      return localStorage.signedIn == 1;
    },
  },
};
</script>

<style scoped></style>
