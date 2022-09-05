const { multiply, addition, division } = require("./calculator");

describe("calculator", () => {

  it("multiply works correctly", () => {
    expect(multiply(5, 2)).toEqual(10);
  });

  it("addition works correctly", () => {
    expect(addition(1, 2)).toEqual(3);
  });

  it("division works correctly", () => {
    expect(division(10, 2)).toEqual(5);
  });

  it.skip("square root works correctly", () => {
    // TDD exercise, commented because square function does not exist yet
    // expect(square(25)).toEqual(5);
  });

  it.skip("power works correctly", () => {
    // TDD exercise, commented power function does not exist yet
    // expect(power(2, 3)).toEqual(8);
  });

  it.skip("is a number", () => {
    // TDD exercise, commented isANumber function does not exist yet
    // expect(isANumber(2)).toBeTruthy();
    // expect(isANumber("two")).toBeFalsy();
  });

});
