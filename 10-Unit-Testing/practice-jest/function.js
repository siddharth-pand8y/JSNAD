const tp = require("node:timers/promises");
const sumConstants = require("./sum.constants.js");

/**
 *
 * @param {number} n1 - first argument
 * @param {number} n2 - second argument
 * @returns {number}
 */
function sum(n1, n2) {
  if (typeof n1 !== "number") {
    throw TypeError(sumConstants.numberErrorMessage);
  }

  if (typeof n2 !== "number") {
    throw TypeError(sumConstants.numberErrorMessage);
  }

  return n1 + n2;
}

/**
 *
 * @param {number} timeout
 * @returns {Promise<number>}
 */
async function emitLuckyNumber(timeout) {
  const ac = new AbortController();
  const { signal } = ac;
  return new Promise((resolve, reject) => {
    tp.setTimeout(timeout, signal).then(() => {
      resolve(Math.round(Math.random() * 100));
    });

    tp.setTimeout(1000).then(() => {
      ac.abort();
      reject("signal abort");
    });
  });
}

module.exports = { sum, emitLuckyNumber };
