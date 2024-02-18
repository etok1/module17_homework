const getPercents = require("./176.js");
describe("getPercents", () => {
  it("returns correct percentage", () => {
    expect(getPercents(30, 200)).toBe(60);
  });
  it("returns percentage if the percent equals to 0", () => {
    expect(getPercents(0, 200)).toBe(0);
  });
  it("returns percentage if the number equals to 0", () => {
    expect(getPercents(50, 0)).toBe(0);
  });
  it("returns percentage for 100% of total number", () => {
    expect(getPercents(50, 0)).toBe(0);
  });
});
