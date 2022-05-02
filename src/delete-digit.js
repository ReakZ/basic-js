const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const str = n.toString().split("");
  let max = 0;
  for (let index = 0; index < str.length; index++) {
    let ne = [...str];
    ne.splice(index, 1);
    let r = parseInt(ne.join(""));
    if (r > max) {
      max = r;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
