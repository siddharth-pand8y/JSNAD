const { describe, it, expect } = require("@jest/globals");
const functions = require("./function.js");
const sumConstants = require("./sum.constants.js");

describe("test cases for functions", () => {
  it("should return the sum of the numbers passed", () => {
    expect(functions.sum(4, 5)).toStrictEqual(9);
  });

  it("should throw a Type Error when a string is passed as argument", () => {
    expect(() => functions.sum(4, "a")).toThrow(
      new TypeError(sumConstants.numberErrorMessage)
    );
    expect(() => functions.sum("b", "a")).toThrow(
      new TypeError(sumConstants.numberErrorMessage)
    );
  });

  it("should return a number when emitLuckyNumber is called with a timeout less than 1000", async () => {
    const result = await functions.emitLuckyNumber(100);
    expect(typeof result).toStrictEqual("number");
  });

  it("should throw when emitLuckyNumber is called with a timeout more than 1000", () => {
    return expect(functions.emitLuckyNumber(10001)).rejects.toMatch(
      'signal abort'
    );
  });
});
