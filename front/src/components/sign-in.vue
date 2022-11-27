<template>
  <div>
    <sideBar v-if="loggedIn" />
    <div class="container">
      <h3>Sign In</h3>
      <form @submit.prevent="signin">
        <div v-if="error" class="error">{{ error }}</div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            v-model="email"
            id="email"
            placeholder="someone@gmail.com"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            id="password"
          />
        </div>
        <button type="submit" class="btn btn-secondary">Sign in</button>
      </form>
      <router-link to="/register">Register here to set up account</router-link>
    </div>
  </div>
</template>

<script>
import sideBar from "@/components/ui/side-bar.vue";

export default {
  name: "signIn",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      id: "",
    };
  },
  created() {
    this.checkSignedIn();
  },
  updated() {
    this.checkSignedIn();
  },
  components: {
    sideBar,
  },
  methods: {
    signin() {
      this.plain
        .post("/signin", { email: this.email, password: this.password })
        .then((response) => this.signinSuccessful(response))
        .catch((error) => this.signinFailed(error));
    },
    signinSuccessful(response) {
      if (!response.data.csrf) {
        this.signinFailed(response);
        return;
      }
      localStorage.csrf = response.data.csrf;
      localStorage.email = this.email;
      localStorage.signedIn = 1;
      this.error = "";
      this.$router.replace("/bids");
    },
    signinFailed(error) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        "";
      delete localStorage.csrf;
      delete localStorage.email;
      delete localStorage.signedIn;
    },
    checkSignedIn() {
      if (localStorage.signedIn == 1) {
        this.$router.replace("/bids");
      }
    },
  },
  computed: {
    loggedIn() {
      return localStorage.signedIn == 1;
    },
  },
};
</script>
<style scoped>
.error {
  color: var(--alertRed);
}
</style>
