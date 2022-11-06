<template>
  <div>
    <sideBar />
    clients
  </div>
</template>

<script>
import sideBar from "@/components/ui/side-bar.vue";

export default {
  components: {
    sideBar,
  },
  data() {
    return {
      clients: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.plain.get("/").then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>

<style scoped></style>
