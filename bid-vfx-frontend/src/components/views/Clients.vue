<template>
  <div>
    <Sidebar />
    clients
  </div>
</template>

<script>
import Sidebar from "@/components/ui/Sidebar.vue";

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      clients: []
    };
  },
  created() {
    if (localStorage.signedIn) {
      this.$router.replace("/");
    } else {
      this.$http.secured
        .get("/api/v1/clients")
        .then(response => {
          this.clients = response.data;
          console.log("here", this.clients);
        })
        .catch(error => this.setError(error, "Something went wrong"));
    }
  }
};
</script>

<style scoped></style>
