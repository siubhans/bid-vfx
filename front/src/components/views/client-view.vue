<template>
  <div>
    clients
    <ul id="example-1">
      <li v-for="item in clients" :key="item.name">
        {{ item.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
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
      this.plain.get("/clients/").then((response) => {
        console.log(response.data);
      });
    },
    printList() {
      this.secured.get("/clients").then((response) => {
        this.clients = response.data;
      });
    },
  },
};
</script>

<style scoped></style>
