import { mount } from "@vue/test-utils";
import buildBid from "./../src/components/new/build-bid.vue";
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

describe("buildBid", () => {
  // Inspect the raw component options
  it("has data", () => {
    expect(typeof buildBid.data).toBe("function");
  });
});

describe("Mounted App", () => {
  const wrapper = mount(buildBid);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("default display as expected", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
