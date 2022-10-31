<template>
  <div>
    <b-button v-b-toggle.sidebar-variant>Toggle Sidebar</b-button>
    <b-sidebar
      id="sidebar-variant"
      title="Sidebar"
      bg-variant="dark"
      text-variant="light"
      shadow
    >
      <div class="px-3 py-2">
        <MenuItem
          v-for="sideMenuItem in sideMenuItems"
          :key="sideMenuItem"
          :item-name="sideMenuItem"
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
      sideMenuItems: ["bids", "clients", "users", "studio"]
    };
  }
};
</script>

<style scoped></style>
