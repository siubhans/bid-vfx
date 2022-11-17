<template>
  <div>
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
      yourStudio: "Your Studio Here",
    };
  },
};
</script>

<style>
.nav-list {
  overflow: hidden;
}
</style>
