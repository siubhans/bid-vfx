<template>
  <div>
    <sideBar v-if="loggedIn" />
    <mainHeading title="Bids" />
    <table
      class="table table-hover table-striped"
      :class="darkMode ? 'table-dark' : 'table-light'"
    >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Project</th>
          <th scope="col">fps</th>
          <th scope="col">Resolution</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">
            <button
              class="btn"
              :class="darkMode ? 'btn-outline-light' : 'btn-outline-dark'"
              @click="darkModeToggle"
            >
              Switch Dark Mode {{ onOff }}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bid, index) in bids" :key="bid.project">
          <th scope="row">
            {{ index + 1 }}
          </th>
          <td>
            <input
              v-if="editing === index"
              type="text"
              v-model="bids[index].project"
            />
            <span v-else>{{ bid.project }}</span>
          </td>
          <td>
            <input
              class="input-group mb-3"
              v-if="editing === index"
              type="text"
              v-model="bids[index].fps"
            />
            <span v-else>{{ bid.fps }}</span>
          </td>
          <td>
            <input
              class="input-group mb-3"
              v-if="editing === index"
              type="text"
              v-model="bids[index].resolution"
            />
            <span v-else>{{ bid.resolution }}</span>
          </td>
          <td>
            <button
              class="btn"
              :class="darkMode ? 'btn-light' : 'btn-dark'"
              @click="deleteBid(bid.id)"
            >
              Delete
            </button>
          </td>
          <td>
            <button
              class="btn"
              :class="darkMode ? 'btn-light' : 'btn-dark'"
              v-if="editing === index"
              @click="updateBid(bid.id, index)"
            >
              Update
            </button>
            <button
              class="btn"
              :class="darkMode ? 'btn-light' : 'btn-dark'"
              v-else
              @click="editBid(index)"
            >
              Edit
            </button>
          </td>
          <td>
            <button class="btn btn-success" @click="buildBid(bid.id)">
              Build Bid
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link v-if="!bids.length" to="/newBid">
      You have no bids - click here to add one
    </router-link>
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
      bids: [],
      darkMode: false,
      onOff: "on",
      editing: false,
      currentUser: [],
    };
  },
  created() {
    this.getList();
    this.printList();
  },
  methods: {
    deleteBid(bid) {
      this.secured
        .delete(`/bids/${bid}`)
        .then(this.printList())
        .catch((error) => console.log(error, "Cannot delete record"));
    },
    editBid(index) {
      this.editing = index;
    },
    updateBid(bid, index) {
      this.secured
        .patch(`/bids/${bid}`, {
          bid: {
            project: this.bids[index].project,
            fps: this.bids[index].fps,
            resolution: this.bids[index].resolution,
          },
        })
        .then(() => {
          this.editing = false;
          this.printList();
        })
        .catch((error) => console.log(error, "Cannot update record"));
    },
    getList() {
      this.plain.get("/bids").then((response) => {
        console.log(response.data);
      });
    },
    printList() {
      this.plain.get("/bids").then((response) => {
        this.bids = response.data;
      });
    },
    darkModeToggle() {
      this.darkMode = !this.darkMode;
      this.onOff = this.darkMode ? "off" : "on";
    },
    buildBid(bid) {
      localStorage.currentBid = bid;
      this.$router.replace("/buildBid");
    },
    getCurrentUser() {
      this.plain
        .get(`/current`)
        .then((response) => {
          this.currentUser = response.data;
        })
        .catch((error) => console.log(error, "Cannot get user"));
    },
  },
  computed: {
    loggedIn() {
      return this.currentUser;
    },
  },
};
</script>

<style scoped></style>
