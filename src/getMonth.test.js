import { getMonth } from "../../utils/getMonth.js";

describe("tests for getMonth function", () => {
  const may = 5;
  const outOfRange = 18;
  const string = 'may';
  const nonInteger = 3.3;

  it("should operate correctly with numbers 1-12", () => {
    expect(getMonth(may)).toBe(`may`);
  }),
    it("should return instruction if number out of range", () => {
      expect(getMonth(outOfRange)).toBe(`enter month number 1 to 12`);
    }),
    it("should return instruction if string is received", () => {
      expect(getMonth(string)).toBe("enter integer number 1 to 12");
    });
    it("should return instruction if not an integer is received", () => {
        expect(getMonth(nonInteger)).toBe("enter integer number 1 to 12");
      });
});
