<template>
  <div id="app">
    <router-view />
    <button @click="download">print</button>
    <div id="print" class="letter">
      <div class="pageout"><BuildBid ref="print" /></div>
      <div class="preview"><BuildBid /></div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "vue3-icon";
import BuildBid from "@/components/new/build-bid.vue";
import { createPdfFromHtml } from "./logic.js";

export default {
  components: {
    BuildBid,
  },
  methods: {
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
};
</script>

<style>
@import "./style/variables.css";

#app {
  height: 100vh;
  background-color: var(--mainNavy);
  color: var(--white);
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
