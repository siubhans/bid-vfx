<template>
  <div class="outterContainer">
    <sideBar v-if="loggedIn" />
    <div v-if="!bidId" class="innerContainer">
      <mainHeading title="New Bid" />
      <form @submit.prevent="addNewBid">
        <div v-if="error">{{ error }}</div>
        <div class="mb-3">
          <label for="project" class="form-label">Project name</label>
          <input type="text" class="form-control" v-model="project" id="name" />
        </div>
        <div class="mb-3 row">
          <div class="col">
            <label for="fps" class="form-label">FPS</label>
            <input type="number" class="form-control" v-model="fps" id="fps" />
          </div>
          <div class="col">
            <label for="resolution" class="form-label">Resolution</label>
            <input
              type="text"
              class="form-control"
              v-model="resolution"
              id="resolution"
            />
          </div>
        </div>
        <label for="clientId" class="form-label">Clients</label>
        <select
          class="form-select mb-3"
          aria-label="Default select example"
          v-model="clientId"
        >
          <option
            v-for="client in clients"
            :key="client.name"
            :value="client.id"
          >
            {{ client.name }} : {{ client.studio }}
          </option>
        </select>
        <button type="submit" class="btn btn-secondary">Create</button>
      </form>
    </div>
    <editBid v-if="bidId" :new-bid-id="this.bidId" />
  </div>
</template>

<script>
import sideBar from "@/components/ui/side-bar.vue";
import mainHeading from "@/components/ui/main-heading.vue";
import editBid from "@/components/new/edit-bid.vue";

export default {
  components: {
    mainHeading,
    sideBar,
    editBid,
  },
  data() {
    return {
      project: "",
      fps: "",
      resolution: "",
      clientId: "",
      bidId: "",
      user: {},
      clients: {},
    };
  },
  created() {
    this.getClientList();
  },
  methods: {
    addNewBid() {
      this.plain
        .post("/bids", {
          bid: {
            project: this.project,
            fps: this.fps,
            resolution: this.resolution,
            client_id: this.clientId,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.bidId = response.data.id;
        })
        .catch((error) => console.log(error, "Cannot create bid"));
    },
    getClientList() {
      this.secured.get("/clients").then((response) => {
        this.clients = response.data;
        console.log(this.clients);
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
