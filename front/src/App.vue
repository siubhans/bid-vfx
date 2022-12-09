<template>
  <div id="app">
    <logOut v-if="currentUser.id > 0" />
    <router-view />
    <!-- <button @click="download">print</button>
    <div id="print" class="letter">
      <div class="pageout"><BuildBid ref="print" /></div>
      <div class="preview"><BuildBid /></div> 
    </div>-->
  </div>
</template>

<script>
import SvgIcon from "vue3-icon";
// import BuildBid from "@/components/new/build-bid.vue";
import { createPdfFromHtml } from "./logic.js";
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
  updated() {
    this.getCurrentUser();
  },
  methods: {
    getCurrentUser() {
      this.plain
        .get(`/current`)
        .then((response) => {
          this.currentUser = response.data;
          console.log(this.currentUser.id);
        })
        .catch(() => {
          this.currentUser = {};
        });
    },
    download() {
      // alert(this.$refs.print);
      createPdfFromHtml(this.$refs.print.$el);
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

.innerContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
}
</style>
