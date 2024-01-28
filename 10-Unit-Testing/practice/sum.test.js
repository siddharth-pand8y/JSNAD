const assert = require("node:assert");
const { describe, it } = require("node:test");
const functions = require("./sum.js");
const sumConstants = require("./sum.constants.js");


describe("test cases for sum module", () => {
  it("should return the sum of argument passed", () => {
    const sum = functions.sum(23, 32);

    assert.strictEqual(sum, 55);
  });

  it("should throw an error when one of the argument is not number", () => {
    assert.throws(
      () => functions.sum(5, "a"),
      TypeError(sumConstants.numberErrorMessage)
    );
    assert.throws(
        () => functions.sum("A", "a"),
        TypeError(sumConstants.numberErrorMessage)
      );
  });

  it('return a number if the timeout passed is less than 1 second', () => {
    assert.doesNotReject(() => functions.emitLuckyNumber(100));
  })

  it('should reject if the timeout passed is more than 1 second', () => {
    assert.rejects(() => functions.emitLuckyNumber(10000));
  })
});
