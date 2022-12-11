<template>
  <div class="container flexContainer">
    <superiorHeading class="flex-1" title="Bid VFX" />
    <div class="container flex-2">
      <form @submit.prevent="register">
        <div v-if="error">{{ error }}</div>
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
        <div class="input-icons mb-4">
          <i class="icon"><font-awesome-icon icon="building" /></i>
          <input
            type="text"
            class="form-control input-field input_user"
            v-model="studio"
            id="studio"
            placeholder="Your Studio Name"
            autocomplete="off"
          />
        </div>
        <div class="input-icons mb-4">
          <i class="icon"><font-awesome-icon icon="unlock" /></i>
          <input
            type="password"
            class="form-control input-field input_user"
            v-model="password"
            id="password"
            placeholder="Password"
            autocomplete="off"
          />
        </div>
        <div class="input-icons mb-5">
          <i class="icon"><font-awesome-icon icon="lock" /></i>
          <input
            type="password"
            class="form-control input-field input_user"
            v-model="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            autocomplete="off"
          />
        </div>
        <button type="submit" class="btn button_login mb-3">Register</button>
      </form>
      <router-link class="Form_link" to="/">Signin</router-link>
    </div>
    <img class="imgBG" src="../assets/star.png" alt="" />
  </div>
</template>

<script>
import superiorHeading from "@/components/ui/superior-heading.vue";
export default {
  name: "registerUser",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    };
  },
  components: {
    superiorHeading,
  },
  created() {
    this.checkSignedIn();
  },
  updated() {
    this.checkSignedIn();
  },
  methods: {
    register() {
      this.plain
        .post("/signup", {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          studio: this.studio,
        })
        .then((response) => this.registerSuccessful(response))
        .catch((error) => this.signinFailed(error));
    },
    registerSuccessful(response) {
      if (!response.data.csrf) {
        this.signinFailed(response);
        return;
      }
      localStorage.csrf = response.data.csrf;
      localStorage.message = "You have successfully registered";
      localStorage.email = this.email;
      localStorage.signedIn = 1;
      this.error = "";
      this.$router.replace("/studioView");
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
      if (localStorage.csrf) {
        this.$router.replace("/bidsView");
      }
    },
  },
};
</script>
<style scoped>
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
