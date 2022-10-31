<template>
  <div class="container">
    <h3>Register</h3>
    <form @submit.prevent="register">
      <div v-if="error">{{ error }}</div>
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
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          v-model="confirmPassword"
          id="confirmPassword"
        />
      </div>
      <button type="submit" class="btn btn-secondary">Register</button>
    </form>
    <router-link to="/">Signin</router-link>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    };
  },
  created() {
    this.checkSignedIn();
  },
  updated() {
    this.checkSignedIn();
  },
  methods: {
    signin() {
      this.$http.plain
        .post("/register", {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
        .then(response => this.signinSuccessful(response))
        .catch(error => this.signinFailed(error));
    },
    signinSuccessful(response) {
      if (!response.data.csrf) {
        this.signinFailed(response);
        return;
      }

      localStorage.csrf = response.data.csrf;
      localStorage.signedIn = true;
      this.error = "";
      this.$router.replace("/bids");
    },
    signinFailed(error) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        "";
      delete localStorage.csrf;
      delete localStorage.signedIn;
    },
    checkSignedIn() {
      if (localStorage.signedIn) {
        this.$router.replace("/bids");
      }
    }
  }
};
</script>

<style scoped></style>
