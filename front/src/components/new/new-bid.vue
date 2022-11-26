<template>
  <div class="outterContainer">
    <sideBar v-if="loggedIn" />
    <div class="innerContainer">
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
      project: "",
      fps: "",
      resolution: "",
      user: {},
    };
  },
  created() {
    if (!localStorage.signedIn == 1) {
      this.$router.replace("/");
    } else {
      this.secured
        .get("/users/10")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error, "Something went wrong"));
    }
  },
  methods: {
    addNewBid() {
      this.plain
        .post("/bids", {
          bid: {
            project: this.project,
            fps: this.fps,
            resolution: this.resolution,
            user_id: 1,
            client_is: 4,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.$router.replace("/bids");
        })
        .catch((error) => console.log(error, "Cannot create bid"));
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
