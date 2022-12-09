<template>
  <div>
    <sideBar v-if="loggedIn" />
    <div class="outterContainer">
      <mainHeading title="Clients" />
    </div>
    <div class="outterContainer">
      <a class="btn btn-filter mb-4" href="/newClient">Add new client</a>
    </div>
    <div class="gridContainer">
      <ul v-for="(client, index) in clients" :key="index">
        <div class="card">
          <div class="card-body">
            <input
              v-if="editing === index"
              type="text"
              v-model="clients[index].name"
            />
            <h4 v-else class="card-title mb-2">
              {{ client.name }}
            </h4>
            <input
              v-if="editing === index"
              type="text"
              v-model="clients[index].producer"
            />
            <h6 v-else class="card-subtitle mb-2 text-muted">
              {{ client.producer }}
            </h6>
            <input
              v-if="editing === index"
              type="text"
              v-model="clients[index].studio"
            />
            <h6 v-else class="card-subtitle mb-2 text-muted">
              {{ client.studio }}
            </h6>
            <div>
              <button class="btn btn-card" @click="deleteClient(client.id)">
                Delete
              </button>
              <button
                class="btn btn-card"
                v-if="editing === index"
                @click="updateClient(client.id, index)"
              >
                Update
              </button>
              <button class="btn btn-card" v-else @click="editClient(index)">
                Edit
              </button>
            </div>
          </div>
        </div>
      </ul>
    </div>
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
    this.printList();
  },
  methods: {
    deleteClient(client) {
      this.secured
        .delete(`/clients/${client}`)
        .then(this.printList())
        .catch((error) => console.log(error, "Cannot delete record"));
    },
    editClient(index) {
      this.editing = index;
    },
    updateClient(client, index) {
      this.secured
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

<style scoped>
.gridContainer {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 1.5rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

ul {
  margin: 0;
  padding: 0;
}

input {
  margin-bottom: 5px;
}

@media only screen and (min-width: 1200px) {
  .gridContainer {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media only screen and (max-width: 1199px) and (min-width: 900px) {
  .gridContainer {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (max-width: 899px) and (min-width: 600px) {
  .gridContainer {
    grid-template-columns: repeat(2, 1fr);
  }
}

.btn-filter {
  background-color: var(--mediumBlue);
  color: var(--white);
}
.btn-card {
  background-color: var(--mediumBlue);
  color: var(--white);
  margin-right: 10px;
}
.btn-card:hover {
  background-color: var(--secondaryNavy);
  color: var(--white);
}
.card-title {
  color: var(--secondaryNavy);
}
</style>
