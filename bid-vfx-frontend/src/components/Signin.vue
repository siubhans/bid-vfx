<template>
  <div>
    <h3>Sign In</h3>
    <form @submit.prevent="signin">
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
      <button type="submit" class="btn btn-secondary">Sign in</button>
    </form>
    <router-link to="/signup">Sign Up</router-link>
  </div>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      email: "",
      password: "",
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
        .post("/signin", {
          email: this.email,
          password: this.password
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
        delete localStorage.csrf
        delete localStorage.signedIn
    },
    checkSignedIn () {
        if(localStorage.signedIn){
            this.$router.replace("/bids");
        }
    }
  }
};
</script>

<style lang="scss" scoped></style>
