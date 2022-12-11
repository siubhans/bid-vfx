<template>
  <div class="outterContainer">
    <sideBar v-if="loggedIn" />
    <div v-if="!bidId" class="innerContainer">
      <mainHeading title="New Bid" />
      <form @submit.prevent="addNewBid">
        <div class="mb-3">
          <label for="project" class="form-label">Project name</label>
          <input type="text" class="form-control" v-model="project" id="name" />
          <p
            v-for="error of v$.project.$errors"
            :key="error.$uid"
            class="error"
          >
            <strong>{{ error.$message }}</strong>
          </p>
        </div>

        <div class="mb-3 row">
          <div class="col col-1">
            <label for="fps" class="form-label">FPS</label>
            <input type="number" class="form-control" v-model="fps" id="fps" />
            <p v-for="error of v$.fps.$errors" :key="error.$uid" class="error">
              <strong>{{ error.$message }}</strong>
            </p>
          </div>
          <div class="col col-2">
            <label for="resolution" class="form-label">Resolution</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="resolution"
              id="resolution"
            >
              <option v-for="res in resolutions" :key="res">
                {{ res }}
              </option>
            </select>
            <p
              v-for="error of v$.resolution.$errors"
              :key="error.$uid"
              class="error"
            >
              <strong>{{ error.$message }}</strong>
            </p>
          </div>
          <div class="col col-1">
            <label for="cost" class="form-label">Day rate</label>
            <input
              type="number"
              class="form-control"
              v-model="cost"
              id="cost"
            />
            <p v-for="error of v$.cost.$errors" :key="error.$uid" class="error">
              <strong>{{ error.$message }}</strong>
            </p>
          </div>
        </div>
        <div v-if="clients.length">
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
          <p
            v-for="error of v$.clientId.$errors"
            :key="error.$uid"
            class="error"
          >
            <strong>{{ error.$message }}</strong>
          </p>
          <button type="submit" class="btn btn-secondary">Create</button>
        </div>
        <div v-else>
          <router-link to="/newClient"
            >You have no clients - click here to add one</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  between,
  numeric,
} from "@vuelidate/validators";

import sideBar from "@/components/ui/side-bar.vue";
import mainHeading from "@/components/ui/main-heading.vue";

export default {
  components: {
    mainHeading,
    sideBar,
  },
  data() {
    return {
      v$: useValidate(),
      project: "",
      fps: "",
      resolution: "",
      clientId: "",
      cost: "",
      bidId: "",
      user: {},
      clients: {},
      error: [],
      resolutions: [
        "2k HD (1920 × 1080)",
        "2K (2048 x 1080)",
        "4K (4096 x 2160)",
        "4K UHD (3840 × 2160)",
        "5K (5120 × 2700)",
        "8K UHD (7680 × 4320)",
        "720p (1280 × 720)",
        "576p (720 × 576)",
        "480p (720 × 480)",
      ],
    };
  },
  created() {
    this.getClientList();
  },
  validations() {
    return {
      project: { required, minLength: minLength(4), maxLength: maxLength(20) },
      fps: { required, betweenValue: between(10, 100) },
      resolution: { required },
      cost: { required, numeric, betweenValue: between(0, 100000000000) },
      clientId: { required },
    };
  },
  methods: {
    addNewBid() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.secured
          .post("/bids", {
            bid: {
              project: this.project,
              fps: this.fps,
              resolution: this.resolution,
              cost: this.cost,
              client_id: this.clientId,
            },
          })
          .then((response) => {
            this.bidId = response.data.id;
            localStorage.currentBid = this.bidId;
            this.$router.replace("/buildBid");
            this.error = [];
          })
          .catch((error) => console.log(error, "Cannot create bid"));
      } else {
        console.log("Form is invalid");
      }
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

<style scoped>
.col-1 {
  flex: 1;
}
.col-2 {
  flex: 2;
}
</style>
