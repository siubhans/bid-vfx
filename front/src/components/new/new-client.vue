<template>
  <div class="outterContainer">
    <sideBar v-if="loggedIn" />
    <div class="innerContainer">
      <mainHeading title="New Client" />
      <form @submit.prevent="addNewClient">
        <div v-if="error">{{ error }}</div>
        <div class="mb-3"></div>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="name"
            id="name"
            placeholder="Client's Name"
          />
        </div>
        <div class="mb-3">
          <label for="producer" class="form-label">Producer</label>
          <input
            type="text"
            class="form-control"
            v-model="producer"
            id="producer"
            placeholder="Producer's Name"
          />
        </div>
        <div class="mb-3">
          <label for="studio" class="form-label">Studio</label>
          <input
            type="text"
            class="form-control"
            v-model="studio"
            id="studio"
            placeholder="Studio Name"
          />
        </div>
        <button type="submit" class="btn btn-secondary">Create</button>
      </form>
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
      name: "",
      producer: "",
      studio: "",
    };
  },

  created() {},

  methods: {
    addNewClient() {
      this.secured
        .post("/clients", {
          client: {
            name: this.name,
            studio: this.studio,
            producer: this.producer,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.$router.replace("/clientsView");
        })
        .catch((error) => console.log(error, "Cannot create client"));
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
