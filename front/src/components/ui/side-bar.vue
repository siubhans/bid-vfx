<template>
  <div>
    <menuItem
      v-for="sideMenuItem in sideMenuItems"
      :key="sideMenuItem"
      :item-name="sideMenuItem"
      :button-color="
        sideMenuItem === 'new bid' ? 'green__button' : 'grey__button'
      "
    />
  </div>
</template>

<script>
import menuItem from "@/components/ui/menu-item.vue";

export default {
  components: {
    menuItem,
  },
  data() {
    return {
      sideMenuItems: ["new bid", "bids", "clients", "users", "studio"],
      yourStudio: "Your Studio Here",
    };
  },
};
</script>

<style></style>
