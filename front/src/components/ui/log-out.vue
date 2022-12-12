<template>
  <div class="logOutButton">
    <button class="btn button_logout mt-2 mb-2" @click="logout()">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.secured.delete("/signin");
      delete localStorage.email;
      delete localStorage.signedIn;
      delete localStorage.message;
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.logOutButton {
  display: flex;
}
.button_logout {
  margin-left: 10px;
  width: 100px;
  background-color: var(--mainNavy);
  border: 1px solid var(--white);
  height: 40px;
  color: var(--white);
}

.button_logout:hover {
  background-color: var(--white);
  color: var(--mainNavy);
}
</style>
