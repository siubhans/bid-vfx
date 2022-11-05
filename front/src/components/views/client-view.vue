<template>
  <div>
    <sideBar />
    clients
  </div>
</template>

<script>
import sideBar from "@/components/ui/side-bar.vue";

export default {
  components: {
    sideBar,
  },
  data() {
    return {
      clients: [],
    };
  },
  created() {
    if (localStorage.signedIn) {
      this.$router.replace("/");
    } else {
      this.$http.secured
        .get("/api/v1/clients")
        .then((response) => {
          this.clients = response.data;
          console.log("here", this.clients);
        })
        .catch((error) => this.setError(error, "Something went wrong"));
    }
  },
};
</script>

<style scoped></style>
