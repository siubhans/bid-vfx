<template>
  <div>
    <sideBar v-if="loggedIn" />
    <mainHeading v-if="registeredStudio" :title="currentUser.studio" />
    <form v-if="registeredStudio" @submit.prevent="confirmStudio">
      <input type="hidden" v-model="registeredStudio" />
      <button type="submit" class="btn btn-success">
        Click here to confirm this studio name
      </button>
    </form>
    <br />
    <button
      v-if="registeredStudio"
      @click="createStudioDetailsShow"
      class="btn btn-light"
    >
      Change Studio Details
    </button>
    <form v-if="firstTimeStudio" @submit.prevent="createStudioDetails">
      <input class="input-group mb-3" type="text" v-model="studio.name" />
      <button type="submit" class="btn btn-success">
        Confirm Studio Details
      </button>
    </form>

    <input
      v-if="editing"
      class="input-group mb-3"
      type="text"
      v-model="studio.name"
    />
    <mainHeading v-else :title="studio.name" />
    <div class="input-group input-group-sm mb-3">
      <input v-if="editing" class="form-control" type="file" />
    </div>
    <div v-if="editing">
      <button class="btn btn-light" @click="updateStudio(studio.id)">
        Update
      </button>
      <button class="btn btn-light" @click="editing = false">Cancel</button>
    </div>
    <div v-else>
      <button class="btn btn-light" @click="editStudio(index)">Edit</button>
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
      studio: [],
      editing: false,
      editingStudio: false,
      registeredStudio: "",
      currentUser: {},
      firstTimeStudio: false,
    };
  },
  created() {
    this.printList();
    this.getCurrentUser();
  },
  // updated() {
  //   this.printList();
  //   this.getCurrentUser();
  // },
  methods: {
    editStudio() {
      this.editing = true;
    },
    updateStudio() {
      this.secured
        .patch(`/studios/${this.studio.id}`, {
          studio: {
            name: this.studio.name,
            logo: this.studio.logo,
          },
        })
        .then(() => {
          this.editing = false;
          this.printList();
        })
        .catch((error) => console.log(error, "Cannot update record"));
    },
    printList() {
      this.secured.get("/studios").then((response) => {
        this.studio = response.data[0];
      });
    },
    getCurrentUser() {
      this.plain
        .get(`/current`)
        .then((response) => {
          this.currentUser = response.data;
          console.log(this.currentUser);
          this.checkForStudio();
        })
        .catch((error) => console.log(error, "Cannot get user"));
    },
    checkForStudio() {
      this.registeredStudio = this.currentUser.studio;
      console.log(this.registeredStudio);
    },
    confirmStudio() {
      this.secured
        .post(`/studios`, {
          studio: {
            name: this.currentUser.studio,
          },
        })
        .then(() => {
          this.deleteStudioFromUser();
          this.registeredStudio = null;
          this.printList();
        })
        .catch((error) => console.log(error, "Cannot update record"));
    },
    createStudioDetailsShow() {
      this.firstTimeStudio = true;
    },
    createStudioDetails() {
      this.secured
        .post(`/studios`, {
          studio: {
            name: this.registeredStudio,
          },
        })
        .then(() => {
          console.log("made studio");
          this.printList();
        })
        .catch((error) => console.log(error, "Cannot update record"));
    },
    deleteStudioFromUser() {
      this.secured
        .patch(`/signinUser/${this.currentUser.id}`, {
          user: {
            studio: null,
          },
        })
        .then(() => {
          console.log("deleted studio");
          this.printList();
        })
        .catch((error) => console.log(error, "Cannot update record"));
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
