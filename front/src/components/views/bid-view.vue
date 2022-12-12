<template>
  <div>
    <sideBar v-if="loggedIn" />
    <mainHeading class="outterContainer" title="Bids" />
    <div class="outterContainer">
      <form
        v-if="!listIsFiltered"
        class="FilterForm_container mb-4"
        @submit.prevent="filterBid()"
      >
        <select
          class="form-select FilterForm_item-1"
          aria-label="Default select example"
          v-model="selectedClient"
        >
          <option value="" disabled selected>Select a client</option>
          <option
            v-for="client in clients"
            :key="client.name"
            :value="client.id"
          >
            {{ client.name }} : {{ client.studio }}
          </option>
        </select>
        <button type="submit" class="btn btn-filter FilterForm_item-2">
          Filter by Client
        </button>
      </form>
      <button v-else @click="printList" class="btn btn-filter mb-4">
        Filter Off
      </button>
    </div>
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
          <th scope="col">Day Rate</th>
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
        <tr v-for="(bid, index) in bids" :key="index">
          <th scope="row">
            {{ index + 1 }}
          </th>
          <td>
            <input
              v-if="editing === index"
              type="text"
              v-model="bids[index].project"
            />
            <span v-else
              ><b>{{ bid.project }}</b></span
            >
          </td>
          <td>
            <input
              v-if="editing === index"
              type="text"
              v-model="bids[index].fps"
            />
            <span v-else>{{ bid.fps }}</span>
          </td>
          <td>
            <input
              v-if="editing === index"
              type="text"
              v-model="bids[index].resolution"
            />
            <span v-else>{{ bid.resolution }}</span>
          </td>
          <td>
            <input
              v-if="editing === index"
              type="number"
              v-model="bids[index].cost"
            />
            <span v-else>{{ formatCurrency(bid.cost) }}</span>
          </td>
          <td>
            <button class="btn btn-warning" @click="deleteBid(bid.id)">
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
      shots: [],
      clients: {},
      selectedClient: "",
      listIsFiltered: false,
    };
  },
  created() {
    this.getList();
    this.getClientList();
    this.printList();
  },
  methods: {
    deleteBid(bid) {
      this.secured
        .delete(`/bids/${bid}`)
        .then(() => {
          this.printList();
        })
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
            cost: this.bids[index].cost,
          },
        })
        .then(() => {
          this.editing = false;
          this.printList();
          this.getShots(bid, this.bids[index].cost);
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
        this.listIsFiltered = false;
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
    getShots(bid, rate) {
      this.plain
        .get("/shots/", {
          params: {
            bid_id: bid,
          },
        })
        .then((response) => {
          this.shots = response.data;
          this.updateCosts(this.shots, rate);
        });
    },
    updateCosts(shots, rate) {
      const shotArray = Array.from(shots);
      shotArray.forEach((shot) => {
        this.secured
          .patch(`shots/${shot.id}`, {
            shot: {
              total: rate * shot.days,
            },
          })
          .then(() => {
            console.log("updated shot", shot.id);
          })
          .catch((error) => console.log(error, "Cannot update shot"));
      });
    },
    formatCurrency(cost) {
      let val = (cost / 1).toFixed(2);
      val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return "€" + val;
    },
    getClientList() {
      this.secured.get("/clients").then((response) => {
        this.clients = response.data;
        console.log(this.clients);
      });
    },
    filterBid() {
      if (this.selectedClient === "") return;
      else {
        const filteredBids = [];
        Object.keys(this.bids).forEach((key) => {
          if (this.bids[key].client_id === this.selectedClient) {
            filteredBids.push(this.bids[key]);
          }
        });
        this.bids = filteredBids;
        this.selectedClient = "";
        this.listIsFiltered = true;
      }
    },
  },
  computed: {
    loggedIn() {
      return this.currentUser;
    },
  },
};
</script>

<style scoped>
.btn-filter {
  background-color: var(--secondaryNavy);
  color: var(--white);
}

.FilterForm_container {
  display: flex;
  width: 40%;
}
.FilterForm_item-1 {
  flex: 1;
}
.FilterForm_item-2 {
  flex: 1;
  margin-left: 5px;
}
</style>
