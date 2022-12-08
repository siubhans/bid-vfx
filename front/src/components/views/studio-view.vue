<template>
  <div class="outterContainer">
    <div class="innerContainer">
      <sideBar v-if="loggedIn" />
      <mainHeading v-if="registeredStudio" :title="currentUser.studio" />
      <form
        v-if="registeredStudio && !firstTimeStudio"
        @submit.prevent="confirmStudio"
      >
        <input type="hidden" v-model="registeredStudio" />
        <button type="submit" class="btn btn-success">
          Click here to confirm <b>{{ registeredStudio }}</b> as your studio
          name
        </button>
      </form>
      <br />
      <button
        v-if="registeredStudio && !firstTimeStudio"
        @click="createStudioDetailsShow"
        class="btn btn-light"
      >
        Change Studio Name
      </button>
      <form v-if="firstTimeStudio" @submit.prevent="createStudioDetails">
        <input
          class="input-group mb-3"
          type="text"
          v-model="registeredStudio"
        />
        <button type="submit" class="btn btn-success">
          Confirm Studio Details
        </button>
      </form>
      <form @submit.prevent="sendFile" enctype="multipart/form-data">
        <input
          v-if="editing"
          class="input-group mb-3"
          type="text"
          v-model="studio.name"
        />
        <mainHeading v-else :title="studio.name" />
        <div class="input-group input-group-sm mb-3">
          <input
            v-if="editing"
            class="form-control"
            type="file"
            ref="file"
            name="file"
            @change="selectFile"
          />
        </div>
        <img
          v-if="studio.logo"
          class="image"
          :src="studio.logo"
          alt="image for studio"
        />
        <div v-if="editing">
          <br />
          <button type="submit" class="btn btn-light">Update</button>
          <button class="btn btn-light" @click="editing = false">Cancel</button>
        </div>
        <div v-else>
          <br />
          <button
            v-if="!registeredStudio"
            class="btn btn-light"
            @click="editStudio()"
          >
            Update Logo
          </button>
        </div>
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
      studio: [],
      editing: false,
      editingStudio: false,
      registeredStudio: "",
      currentUser: {},
      firstTimeStudio: false,
      file: [],
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
    printList() {
      this.secured
        .get("/studios")
        .then((response) => {
          if (response.data[0]) {
            this.studio = response.data[0];
            console.log(response.data[0]);
          } else {
            this.studio = [];
          }
        })
        .catch((error) => console.log(error, "Cannot get studio"));
    },
    getCurrentUser() {
      this.plain
        .get(`/current`)
        .then((response) => {
          this.currentUser = response.data;
          console.log(response.data);
          this.checkForStudio();
        })
        .catch((error) => console.log(error, "Cannot get user"));
    },
    checkForStudio() {
      this.registeredStudio = this.currentUser.studio;
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
          this.deleteStudioFromUser();
          this.registeredStudio = null;
          this.firstTimeStudio = false;
          this.$router.reload();
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
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    sendFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      // formData.append("studio[name]", this.studio.name);
      this.secured
        .patch(`/studios/${this.studio.id}`, formData)
        .then((response) => console.log(response.data))
        .then(() => {
          this.editing = false;
          this.printList();
        })
        .catch((error) => console.log(error, "Cannot process studio update"));
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
.image {
  width: 200px;
  border-radius: 10px;
  border: 2px solid white;
}
</style>
