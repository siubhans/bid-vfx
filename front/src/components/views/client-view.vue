<template>
  <div>
    <sideBar v-if="loggedIn" />
    <mainHeading title="Clients" />
    <ul id="example-1">
      <li v-for="item in clients" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
    <a href="/newClient">Add new client</a>
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
      clients: [],
    };
  },
  created() {
    this.getList();
    this.printList();
  },
  methods: {
    getList() {
      this.plain.get("/clients").then((response) => {
        console.log(response.data);
      });
    },
    printList() {
      this.secured.get("/clients").then((response) => {
        this.clients = response.data;
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
