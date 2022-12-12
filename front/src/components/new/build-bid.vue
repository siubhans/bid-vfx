<template>
  <div>
    <sideBar v-if="loggedIn" />
    <!-- <button @click="download">Print PDF</button> -->
    <form v-if="showNewForm" @submit.prevent="addNewShot">
      <div class="outterContainer">
        <input
          type="text"
          class="input-group-text flex-1"
          id="newName"
          v-model="newName"
          placeholder="Enter new shot name"
        />
        <button type="submit" class="btn btn-success flex-2">
          Create Shot
        </button>
      </div>
    </form>
    <div id="print" class="A3 landscape">
      <div class="pageout" ref="print">
        <table
          class="table table-hover table-striped"
          :class="darkMode ? 'table-dark' : 'table-light'"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Thumbnail</th>
              <th scope="col">Shot Name</th>
              <th scope="col">Scene</th>
              <th scope="col">Description</th>
              <th scope="col">VFX Work</th>
              <th scope="col">Methodology</th>
              <th scope="col">Notes</th>
              <th scope="col">Days</th>
              <th scope="col">Total</th>
              <th scope="col">
                <button
                  class="btn btn-success"
                  :class="{ disabled: showNewForm }"
                  @click="showNewShot"
                >
                  Add Shot
                </button>
              </th>
              <th scope="col">
                <button
                  class="btn"
                  :class="darkMode ? 'btn-outline-light' : 'btn-outline-dark'"
                  @click="csvMaker()"
                >
                  Print CSV
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
                <img class="image" :src="shot.image" alt="shot thumbnail" />
              </td>
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
                <span v-if="editing === index">Not editable</span>
                <div v-else :title="shot.total">
                  {{ formatCurrency(shot.total) }}
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
              <td>
                <div v-if="showImageInput === index">
                  <form
                    enctype="multipart/form-data"
                    @submit.prevent="sendImage(shot.id)"
                  >
                    <input
                      class="form-control"
                      type="file"
                      ref="file"
                      @change="selectFile"
                    />
                    <button type="submit" class="btn btn-light">
                      Confirm Image
                    </button>
                  </form>
                </div>
                <div v-else>
                  <button
                    class="btn"
                    :class="darkMode ? 'btn-light' : 'btn-dark'"
                    @click="showImageForm(index)"
                  >
                    Upload Image
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from "@/components/ui/side-bar.vue";
import { createPdfFromHtml } from "@/logic.js";

import csvDownload from "json-to-csv-export";

export default {
  components: {
    sideBar,
  },
  data() {
    return {
      shots: {},
      darkMode: false,
      onOff: "Dark Mode",
      editing: false,
      newName: "",
      showNewForm: false,
      showImageInput: false,
      file: "",
      rate: "",
    };
  },
  created() {
    this.getRate();
    this.printList();
  },
  methods: {
    csvMaker() {
      const newArray = this.shots;
      newArray.forEach((object) => {
        delete object["id"];
        delete object["image"];
        delete object["bid_id"];
        delete object["created_at"];
        delete object["updated_at"];
      });
      console.log(newArray);
      const currentdate = new Date();
      const dataToConvert = {
        data: this.shots,
        filename: "shots_" + currentdate,
        delimiter: ",",
      };
      csvDownload(dataToConvert);
      this.printList();
    },
    download() {
      console.log(this.$refs.print);
      createPdfFromHtml(this.$refs.print);
    },
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
          this.editing = false;
        })
        .catch((error) => console.log(error, "Cannot delete record"));
    },
    editShot(index) {
      this.editing = index;
    },
    showImageForm(index) {
      this.showImageInput = index;
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
            total: this.rate * this.shots[index].days,
          },
        })
        .then(() => {
          this.editing = false;
          this.printList();
        })
        .catch((error) => console.log(error, "Cannot update record"));
    },
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
    selectFile() {
      this.file = this.$refs.file[0].files[0];
      console.log("1", this.$refs.file[0].files[0]);
    },
    sendImage(shot) {
      let formData = new FormData();
      formData.append("file", this.file);
      console.log("2", ...formData.entries());
      this.secured
        .patch(`/shotsImage/${shot}`, formData)
        .then((response) => {
          console.log("3", ...formData.entries());
          console.log("4", response.data);
        })
        .then(() => {
          this.editing = false;
          this.printList();
          this.showImageInput = false;
        })
        .catch((error) => console.log(error, "Cannot process studio update"));
    },
    getRate() {
      this.plain
        .get(`/bids/${localStorage.currentBid}`)
        .then((response) => {
          this.rate = response.data.cost;
        })
        .catch((error) => console.log(error, "Cannot get rate"));
    },
    formatCurrency(cost) {
      let val = (cost / 1).toFixed(2);
      val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return "€" + val;
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

.image {
  height: 100px;
  border-radius: 10px;
  border: 2px solid white;
}

.flex-1 {
  margin: 0.5rem;
  width: 20%;
}

.flex-2 {
  margin: 0.5rem;
  width: 10%;
}
</style>
