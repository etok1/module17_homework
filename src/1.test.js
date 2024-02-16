const { reverseString } = require("./1.js");

describe("reverseString", () => {
  it("should return a reversed string", () => {
    expect(reverseString("apple")).toBe("elppa");
  });
});
