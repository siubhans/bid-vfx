import { mount } from "@vue/test-utils";
import signIn from "./../src/components/sign-in.vue";

describe("signIn", () => {
  it("has data", () => {
    expect(typeof signIn.data).toBe("function");
  });
});

describe("Mounted App", () => {
  const wrapper = mount(signIn);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("register link shows", () => {
    expect(wrapper.html()).toContain("Create account");
  });

  test("heading displays", () => {
    expect(wrapper.html()).toContain("BID VFX");
  });

  test("has a button", () => {
    expect(wrapper.find("button").exists()).toBe(true);
  });
});
