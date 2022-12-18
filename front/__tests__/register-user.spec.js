import { mount } from "@vue/test-utils";
import registerUser from "./../src/components/register-user.vue";

describe("registerUser", () => {
  it("has data", () => {
    expect(typeof registerUser.data).toBe("function");
  });
});

describe("Mounted App", () => {
  const wrapper = mount(registerUser);

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
