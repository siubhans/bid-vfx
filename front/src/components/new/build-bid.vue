<template>
  <div>
    <sideBar v-if="loggedIn" />
    <form v-if="showNewForm" @submit.prevent="addNewShot">
      <div class="form-group">
        <label for="newName">Enter Shot Name</label>
        <input
          type="text"
          class="form-control"
          id="newName"
          v-model="newName"
        />
      </div>
      <button type="submit" class="btn btn-success">Create Shot</button>
    </form>
    <table
      class="table table-hover table-striped"
      :class="darkMode ? 'table-dark' : 'table-light'"
    >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Shot Name</th>
          <th scope="col">Scene</th>
          <th scope="col">Description</th>
          <th scope="col">VFX Work</th>
          <th scope="col">Methodology</th>
          <th scope="col">Notes</th>
          <th scope="col">Days</th>
          <th scope="col">Total</th>
          <th scope="col">
            <button class="btn btn-success" @click="showNewShot">
              Add New Shot
            </button>
          </th>
          <th scope="col">
            <button
              class="btn"
              :class="darkMode ? 'btn-outline-light' : 'btn-outline-dark'"
              @click="darkModeToggle"
            >
              {{ onOff }}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shot, index) in shots" :key="shot">
          <th scope="row">
            {{ index + 1 }}
          </th>
          <td class="shotCellSmall">
            <input
              v-if="editing === index"
              type="text"
              v-model="shots[index].name"
            />
            <div v-else :title="shot.name">
              {{ shot.name }}
            </div>
          </td>
          <td class="shotCellSmall">
            <input
              v-if="editing === index"
              type="text"
              v-model="shots[index].scene"
            />
            <div v-else :title="shot.scene">
              {{ shot.scene }}
            </div>
          </td>
          <td class="shotCellLarge">
            <textarea
              v-if="editing === index"
              type="text"
              v-model="shots[index].description"
            />
            <div v-else :title="shot.description">
              {{ shot.description }}
            </div>
          </td>
          <td class="shotCellLarge">
            <textarea
              v-if="editing === index"
              type="text"
              v-model="shots[index].vfx_work"
            />
            <div v-else :title="shot.vfx_work">
              {{ shot.vfx_work }}
            </div>
          </td>
          <td class="shotCellLarge">
            <textarea
              v-if="editing === index"
              type="text"
              v-model="shots[index].methodology"
            />
            <div v-else :title="shot.methodology">
              {{ shot.methodology }}
            </div>
          </td>
          <td class="shotCellLarge">
            <textarea
              v-if="editing === index"
              type="text"
              v-model="shots[index].notes"
            />
            <div v-else :title="shot.notes">
              {{ shot.notes }}
            </div>
          </td>
          <td class="shotCellSmall">
            <input
              v-if="editing === index"
              type="number"
              v-model="shots[index].days"
            />
            <div v-else :title="shot.days">
              {{ shot.days }}
            </div>
          </td>
          <td class="shotCellSmall">
            <input
              v-if="editing === index"
              type="text"
              v-model="shots[index].total"
            />
            <div v-else :title="shot.total">
              {{ shot.total }}
            </div>
          </td>
          <td>
            <button
              class="btn"
              :class="darkMode ? 'btn-light' : 'btn-dark'"
              @click="deleteShot(shot.id)"
            >
              Delete
            </button>
          </td>
          <td>
            <button
              class="btn"
              :class="darkMode ? 'btn-light' : 'btn-dark'"
              v-if="editing === index"
              @click="updateShot(shot.id, index)"
            >
              Update
            </button>
            <button
              class="btn"
              :class="darkMode ? 'btn-light' : 'btn-dark'"
              v-else
              @click="editShot(index)"
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import sideBar from "@/components/ui/side-bar.vue";

export default {
  components: {
    sideBar,
  },
  data() {
    return {
      shots: [],
      darkMode: false,
      onOff: "Dark Mode",
      editing: false,
      newName: "",
      showNewForm: false,
    };
  },
  created() {
    // this.getList();
    this.printList();
  },
  methods: {
    showNewShot() {
      this.showNewForm = !this.showNewForm;
    },
    addNewShot() {
      this.secured
        .post("/shots", {
          shot: {
            name: this.newName,
            bid_id: localStorage.currentBid,
          },
        })
        .then(() => {
          this.printList();
          this.newName = "";
          this.showNewForm = false;
        })
        .catch((error) => console.log(error, "Cannot create client"));
    },
    deleteShot(shot) {
      this.secured
        .delete(`/shots/${shot}`)
        .then(() => {
          this.printList();
        })
        .catch((error) => console.log(error, "Cannot delete record"));
    },
    editShot(index) {
      this.editing = index;
    },
    updateShot(shot, index) {
      this.secured
        .patch(`shots/${shot}`, {
          shot: {
            name: this.shots[index].name,
            description: this.shots[index].description,
            methodology: this.shots[index].methodology,
            scene: this.shots[index].scene,
            vfx_work: this.shots[index].vfx_work,
            notes: this.shots[index].notes,
            days: this.shots[index].days,
            total: this.shots[index].total,
          },
        })
        .then(() => {
          this.editing = false;
          this.printList();
        })
        .catch((error) => console.log(error, "Cannot update record"));
    },
    // getList() {
    //   this.plain.get("/shots").then((response) => {
    //     console.log("here", response.data);
    //   });
    // },
    printList() {
      this.plain
        .get("/shots", {
          params: {
            bid_id: localStorage.currentBid,
          },
        })
        .then((response) => {
          this.shots = response.data;
        });
    },
    darkModeToggle() {
      this.darkMode = !this.darkMode;
      this.onOff = this.darkMode ? "Light Mode" : "Dark Mode";
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
.shotCellSmall {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
}
.shotCellLarge {
  overflow: hidden;
  font-size: 10px;
}
</style>
