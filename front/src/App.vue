<template>
  <div id="app">
    <logOut v-if="currentUser.id > 0" />
    <router-view />
  </div>
</template>

<script>
import SvgIcon from "vue3-icon";
import logOut from "@/components/ui/log-out.vue";

export default {
  data() {
    return {
      currentUser: {},
    };
  },
  components: {
    logOut,
  },
  created() {
    this.getCurrentUser();
  },
  methods: {
    getCurrentUser() {
      this.plain
        .get(`/current`)
        .then((response) => {
          this.currentUser = response.data;
        })
        .catch(() => {
          this.currentUser = {};
        });
    },
  },
  setup() {
    return {
      SvgIcon,
    };
  },
  computed: {
    loggedIn() {
      return this.currentUser;
    },
  },
};
</script>

<style>
@import "./style/variables.css";

#app {
  height: 100vh;
  background-color: var(--mainNavy);
  color: var(--white);
  padding: 0;
}

.outterContainer {
  display: flex;
  justify-content: center;
}
.error {
  -webkit-text-fill-color: var(--alertRed);
}

.innerContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
}
</style>
