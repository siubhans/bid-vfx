<template>
  <div>
    <sideBar v-if="loggedIn" />
    <mainHeading title="Bids" />
    <ul>
      <li v-for="item in bids" :key="item.email"></li>
    </ul>
  </div>
</template>

<script>
import sideBar from "@/components/ui/side-bar.vue";
import mainHeading from "@/components/ui/main-heading.vue";

export default {
  components: {
    mainHeading,
    sideBar,
  },
  data() {
    return {
      bids: [],
    };
  },
  created() {
    this.getList();
    this.printList();
  },
  methods: {
    getList() {
      this.plain.get("/bids").then((response) => {
        console.log(response.data);
      });
    },
    printList() {
      this.plain.get("/bids").then((response) => {
        this.bids = response.data;
      });
    },
  },
  computed: {
    loggedIn() {
      return localStorage.signedIn == 1;
    },
  },
};
</script>

<style scoped></style>
