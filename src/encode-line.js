const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let ar = str.split("");
  let counter = 0;
  let result = [];
  for (let index = 0; index < ar.length; index++) {
    let char = ar[index];
    if (ar[index + 1] && ar[index + 1] == char) {
      counter++;
    } else {
      if (counter > 0) {
        result.push(`${counter+1}${char}`);
      } else {
        result.push(`${char}`);
      }
      counter = 0;
    }
  }
  return result.join("");
}

module.exports = {
  encodeLine,
};
