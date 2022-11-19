<template>
  <div>
    <sideBar v-if="loggedIn" />
    <mainHeading title="Users" />
    <ul>
      <li v-for="item in users" :key="item.email">
        {{ item.email }}
        {{ item.created_at }}
      </li>
    </ul>
  </div>
</template>

<script>
import sideBar from "@/components/ui/side-bar.vue";
import mainHeading from "@/components/ui/main-heading.vue";

export default {
  components: {
    sideBar,
    mainHeading,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getList();
    this.printList();
  },
  methods: {
    getList() {
      this.plain.get("/").then((response) => {
        console.log(response.data);
      });
    },
    printList() {
      this.plain.get("/").then((response) => {
        this.users = response.data;
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
