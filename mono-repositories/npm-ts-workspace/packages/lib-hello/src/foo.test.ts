import { foo } from "./foo";

describe("test foo", () => {
  it("should return test", () => {
    expect(foo()).toBe("I am foo");
  });
});
