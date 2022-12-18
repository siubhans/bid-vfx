import { mount } from "@vue/test-utils";
import newBid from "./../src/components/new/new-bid.vue";
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

describe("newBid", () => {
  it("has data", () => {
    expect(typeof rnewBid.data).toBe("function");
  });
});

describe("Mounted App", () => {
  const wrapper = mount(newBid);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("sign in link shows", () => {
    expect(wrapper.html()).toContain("Signin");
  });

  test("heading displays", () => {
    expect(wrapper.html()).toContain("BID VFX");
  });
});
