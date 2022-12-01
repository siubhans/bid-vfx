<template>
  <div>
    <sideBar v-if="loggedIn" />
    <mainHeading title="Studios" />
    <ul v-for="(studio, index) in studios" :key="studio.name">
      <input
        v-if="editing === index"
        type="text"
        v-model="studios[index].name"
      />
      <li v-else>{{ studio.name }}</li>
      <input
        v-if="editing === index"
        type="text"
        v-model="studios[index].logo"
      />
      <button
        class="btn btn-light"
        v-if="editing === index"
        @click="updateStudio(studio.id, index)"
      >
        Update
      </button>
      <button class="btn btn-light" v-else @click="editStudio(index)">
        Edit
      </button>
    </ul>
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
    };
  },
  created() {
    this.printList();
    this.checkForStudio();
  },
  methods: {
    editStudio(index) {
      this.editing = index;
    },
    updateStudio(studio, index) {
      this.secured
        .patch(`/studios/${studio}`, {
          studio: {
            name: this.studios[index].name,
            logo: this.studios[index].logo,
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
        this.studios = response.data;
      });
    },
    checkForStudio() {
      this.plain
        .get(`/current`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error, "Cannot get user"));
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
