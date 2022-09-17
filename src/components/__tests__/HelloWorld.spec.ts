import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Counter from "../Counter.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(Counter, { props: { count: 3 } });
    expect(wrapper.text()).toContain("Count is: 3");
  });
});
