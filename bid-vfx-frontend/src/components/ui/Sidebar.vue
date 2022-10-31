<template>
  <div>
    <b-button v-b-toggle.sidebar-variant>Sidebar</b-button>
    <b-sidebar
      id="sidebar-variant"
      :title="yourStudio"
      bg-variant="dark"
      text-variant="light"
      shadow
      width="15vw"
    >
      <div class="px-3 py-2">
        <MenuItem
          v-for="sideMenuItem in sideMenuItems"
          :key="sideMenuItem"
          :item-name="sideMenuItem"
          :button-color="
            sideMenuItem === 'new bid' ? 'green__button' : 'grey__button'
          "
        />
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import MenuItem from "@/components/ui/MenuItem.vue";

export default {
  components: {
    MenuItem
  },
  data() {
    return {
      sideMenuItems: ["new bid", "bids", "clients", "users", "studio"],
      yourStudio: "Your Studio Here"
    };
  }
};
</script>

<style>
.b-sidebar-body,
.b-sidebar-header {
  background-color: var(--secondaryNavy);
}
</style>
