<template>
  <div>
    <VueSidebarMenuAkahon
      menuTitle="Bid VFX"
      :isSearch="false"
      profileImg="../favicon.ico"
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
          link: "/newBid",
          name: "new bid",
          tooltip: "new bid",
          icon: "bx-plus",
        },
        {
          link: "/bidsView",
          name: "bids",
          tooltip: "bids",
          icon: "bx-grid-alt",
        },
        {
          link: "/clientsView",
          name: "clients",
          tooltip: "clients",
          icon: "bx-group",
        },
        {
          link: "/studioView",
          name: "studio",
          tooltip: "studio",
          icon: "bx-home-circle",
        },
        {
          link: "/searchView",
          name: "search shots",
          tooltip: "search",
          icon: "bx-search-alt-2",
        },
      ],
    };
  },
  methods: {
    logout() {
      this.secured.delete("/signin");
      delete localStorage.email;
      delete localStorage.signedIn;
      delete localStorage.message;
      this.$router.replace("/");
    },
  },
  computed: {
    loggedIn() {
      return localStorage.signedIn == 1;
    },
    yourStudio() {
      return localStorage.email ? localStorage.email : "";
    },
  },
};
</script>

<style>
.nav-list {
  overflow: hidden;
}
.sidebar div img {
  margin-left: 5px;
  margin-right: 15px;
}
.sidebar li i {
  margin-left: 2px;
}
</style>
