<template>
  <div>
    <sideBar v-if="loggedIn" />
    <mainHeading title="New Client" />
    <form @submit.prevent="addNewClient">
      <div v-if="error">{{ error }}</div>
      <div class="mb-3">
        <label for="client" class="form-label">Client</label>
        <input
          type="text"
          class="form-control"
          v-model="client"
          id="client"
          placeholder="Some Client Name"
        />
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          v-model="name"
          id="name"
          placeholder="Some Client"
        />
      </div>
      <div class="mb-3">
        <label for="producer" class="form-label">Producer</label>
        <input
          type="text"
          class="form-control"
          v-model="producer"
          id="producer"
        />
      </div>
      <div class="mb-3">
        <label for="studio" class="form-label">Studio</label>
        <input type="text" class="form-control" v-model="studio" id="studio" />
      </div>
      <button type="submit" class="btn btn-secondary">Create</button>
    </form>
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
      name: "",
      producer: "",
      client: "",
      studio: "",
    };
  },
  created() {},
  methods: {
    addNewClient() {
      this.secured
        .post("/clients", {
          name: this.name,
          producer: this.producer,
          client: this.client,
          studio: this.studio,
          id: 3,
          user_id: 2,
        })
        .catch((error) => console.log(error));
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
