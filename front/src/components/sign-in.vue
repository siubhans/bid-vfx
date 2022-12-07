<template>
  <div>
    <div class="container flexContainer">
      <superiorHeading class="flex-1" title="Bid VFX" />
      <div class="container flex-2">
        <form @submit.prevent="signin">
          <div v-if="error" class="error">{{ error }}</div>
          <div class="input-icons mb-4">
            <i class="icon"><font-awesome-icon icon="user" /></i>
            <input
              type="email"
              class="form-control input-field input_user"
              v-model="email"
              id="email"
              placeholder="Email"
              autocomplete="off"
            />
          </div>
          <div class="input-icons mb-5">
            <i class="icon"><font-awesome-icon icon="lock" /></i>
            <input
              type="password"
              class="form-control input-field input_user"
              v-model="password"
              id="password"
              placeholder="Password"
              autocomplete="off"
            />
          </div>
          <button type="submit" class="btn button_login mb-3">Sign in</button>
        </form>
        <router-link class="Form_link" to="/register"
          >Create account</router-link
        >
      </div>
    </div>
    <img class="imgBG" src="../assets/star.png" alt="" />
  </div>
</template>

<script>
import superiorHeading from "@/components/ui/superior-heading.vue";

export default {
  name: "signIn",
  components: {
    superiorHeading,
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
      id: "",
      currentUser: [],
    };
  },
  created() {
    this.checkSignedIn();
    this.getCurrentUser();
  },
  updated() {
    this.checkSignedIn();
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
      this.$router.replace("/bidsView");
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
      if (!this.currentUser) {
        this.$router.replace("/bidsView");
      }
    },
    getCurrentUser() {
      this.plain
        .get(`/current`)
        .then((response) => {
          this.currentUser = response.data;
        })
        .catch((error) => console.log(error, "Cannot get user"));
    },
  },
  computed: {
    loggedIn() {
      return this.currentUser;
    },
  },
};
</script>
<style scoped>
/* #app {
  background: url("../assets/stars.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
} */
.imgBG {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 30vw;
  opacity: 0.4;
}

.error {
  -webkit-text-fill-color: var(--alertRed);
}

input:-webkit-autofill,
input:-webkit-autofill:focus {
  transition: background-color 600000s 0s, color 600000s 0s;
}

.input_user {
  border-radius: 50px;
  background-color: var(--input-grey);
  border: none;
  height: 50px;
  color: var(--white);
}

.input_user::placeholder {
  color: var(--white);
  opacity: 0.7;
}

.input_user::selection {
  box-shadow: none;
  border: none;
}
.input-icons i {
  position: absolute;
}

.input-icons {
  width: 100%;
  margin-bottom: 10px;
}

.icon {
  padding: 12px;
  min-width: 100px;
  text-align: center;
  color: var(--white);
  opacity: 0.7;
}

.input-field {
  width: 70%;
  padding: 10px;
  text-align: center;
}
@media all and (min-width: 600px) {
  .flexContainer {
    display: flex;
  }
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 1;
  margin-top: 35vh;
}

.button_login {
  width: 70%;
  border-radius: 50px;
  background-color: var(--secondaryNavy);
  border: none;
  height: 50px;
  color: var(--white);
}

.button_login:hover {
  background-color: var(--input-grey);
}

.Form_link {
  text-decoration: none;
  color: var(--white);
}
.Form_link:hover {
  text-decoration: underline;
  color: var(--input-grey);
}
</style>
