<template>
  <div>
    <sideBar v-if="loggedIn" />
    <div class="outterContainer">
      <mainHeading title="Search Shots" />
    </div>
    <div class="outterContainer">
      <input
        class="input-group-text"
        type="text"
        v-model="searchValue"
        placeholder="Enter keyword"
      />
      <button class="btn btn-filter" @click="filterShot">Search Shots</button>
    </div>
    <table class="table table-hover table-striped table-secondary">
      <thead>
        <tr>
          <th scope="col">Shot Name</th>
          <th scope="col">Scene</th>
          <th scope="col">Description</th>
          <th scope="col">VFX Work</th>
          <th scope="col">Methodology</th>
          <th scope="col">Notes</th>
          <th scope="col">Days</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="shot in newShots" :key="shot">
          <td class="shotCellSmall">
            <div :title="shot.name">
              {{ shot.name }}
            </div>
          </td>
          <td class="shotCellSmall">
            <div :title="shot.scene">
              {{ shot.scene }}
            </div>
          </td>
          <td class="shotCellLarge">
            <div :title="shot.description">
              {{ shot.description }}
            </div>
          </td>
          <td class="shotCellLarge">
            <div :title="shot.vfx_work">
              {{ shot.vfx_work }}
            </div>
          </td>
          <td class="shotCellLarge">
            <div :title="shot.methodology">
              {{ shot.methodology }}
            </div>
          </td>
          <td class="shotCellLarge">
            <div :title="shot.notes">
              {{ shot.notes }}
            </div>
          </td>
          <td class="shotCellSmall">
            <div :title="shot.days">
              {{ shot.days }}
            </div>
          </td>
          <td class="shotCellSmall">
            <div :title="shot.total">
              {{ formatCurrency(shot.total) }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import sideBar from "@/components/ui/side-bar.vue";
import mainHeading from "@/components/ui/main-heading.vue";

export default {
  components: {
    sideBar,
    mainHeading,
  },
  data() {
    return {
      shots: {},
      searchValue: "",
      newShots: {},
    };
  },
  created() {
    this.printList();
  },
  methods: {
    printList() {
      this.plain.get("/allShots").then((response) => {
        this.shots = response.data;
      });
    },
    formatCurrency(cost) {
      let val = (cost / 1).toFixed(2);
      val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return "€" + val;
    },
    filterShot() {
      let filteredShots = [];
      if (this.searchValue === "") filteredShots = [];
      else {
        Object.keys(this.shots).forEach((key) => {
          if (this.shots[key].vfx_work !== null) {
            if (
              this.shots[key].vfx_work
                .toUpperCase()
                .includes(this.searchValue.toUpperCase())
            ) {
              filteredShots.push(this.shots[key]);
            }
          }
          if (this.shots[key].name !== null) {
            if (
              this.shots[key].name
                .toUpperCase()
                .includes(this.searchValue.toUpperCase())
            ) {
              filteredShots.push(this.shots[key]);
            }
          }
          if (this.shots[key].description !== null) {
            if (
              this.shots[key].description
                .toUpperCase()
                .includes(this.searchValue.toUpperCase())
            ) {
              filteredShots.push(this.shots[key]);
            }
          }
          if (this.shots[key].methodology !== null) {
            if (
              this.shots[key].methodology
                .toUpperCase()
                .includes(this.searchValue.toUpperCase())
            ) {
              filteredShots.push(this.shots[key]);
            }
          }
          if (this.shots[key].notes !== null) {
            if (
              this.shots[key].notes
                .toUpperCase()
                .includes(this.searchValue.toUpperCase())
            ) {
              filteredShots.push(this.shots[key]);
            }
          }
          if (this.shots[key].scene !== null) {
            if (
              this.shots[key].scene
                .toUpperCase()
                .includes(this.searchValue.toUpperCase())
            ) {
              filteredShots.push(this.shots[key]);
            }
          }
        });
      }
      this.newShots = filteredShots;
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
.btn-filter {
  background-color: var(--secondaryNavy);
  color: var(--white);
}
.outterContainer {
  margin: 1rem;
}
.btn {
  margin-left: 1rem;
}
</style>
