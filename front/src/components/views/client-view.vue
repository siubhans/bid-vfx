<template>
  <div>
    <sideBar v-if="loggedIn" />
    <mainHeading title="Clients" />
    <a href="/newClient">Add new client</a>
    <ul v-for="(client, index) in clients" :key="client.name">
      <input
        v-if="editing === index"
        type="text"
        v-model="clients[index].name"
      />
      <li v-else><b>Contact name:</b> {{ client.name }}</li>
      <input
        v-if="editing === index"
        type="text"
        v-model="clients[index].producer"
      />
      <li v-else><b>Producer:</b> {{ client.producer }}</li>
      <input
        v-if="editing === index"
        type="text"
        v-model="clients[index].studio"
      />
      <li v-else><b>Studio:</b> {{ client.studio }}</li>
      <button @click="deleteClient(client.id)">Delete</button>
      <button v-if="editing === index" @click="updateClient(client.id, index)">
        Update
      </button>
      <button v-else @click="editClient(index)">Edit</button>
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
      clients: [],
      editing: false,
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
    deleteClient(client) {
      this.plain
        .delete(`/clients/${client}`)
        .then(this.printList())
        .catch((error) => console.log(error, "Cannot delete record"));
    },
    editClient(index) {
      console.log(index);
      this.editing = index;
    },
    updateClient(client, index) {
      this.plain
        .patch(`/clients/${client}`, {
          client: {
            name: this.clients[index].name,
            studio: this.clients[index].studio,
            producer: this.clients[index].producer,
          },
        })
        .then(() => {
          this.editing = false;
          this.printList();
        })
        .catch((error) => console.log(error, "Cannot update record"));
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
