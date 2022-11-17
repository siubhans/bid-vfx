<template>
  <div>
    <button v-if="loggedIn" @click="logout()">Logout</button>
    <VueSidebarMenuAkahon
      menuTitle="Bid VFX"
      :isSearch="false"
      profileImg=""
      :profileName="yourStudio"
      profileRole=""
      :isExitButton="false"
      :menuItems="sideMenuItems"
      menuIcon="bx-child"
      bgColor="#304360"
    />
  </div>
</template>

<script>
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

export default {
  components: {
    VueSidebarMenuAkahon,
  },
  data() {
    return {
      sideMenuItems: [
        {
          link: "/newbid",
          name: "new bid",
          tooltip: "new bid",
          icon: "bx-plus",
        },
        { link: "/bids", name: "bids", tooltip: "bids", icon: "bx-grid-alt" },
        {
          link: "/clients",
          name: "clients",
          tooltip: "clients",
          icon: "bx-group",
        },
        {
          link: "/users",
          name: "users",
          tooltip: "users",
          icon: "bx-user",
        },
        {
          link: "/studio",
          name: "studio",
          tooltip: "studio",
          icon: "bx-home-circle",
        },
      ],
      yourStudio: localStorage.email ? localStorage.email : "",
    };
  },
  methods: {
    logout() {
      this.secured.delete("/signin");
      delete localStorage.email;
      delete localStorage.signedIn;
      this.$router.replace("/");
    },
  },
  computed: {
    loggedIn() {
      return localStorage.signedIn == 1;
    },
  },
};
</script>

<style>
.nav-list {
  overflow: hidden;
}
</style>
