const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


  let L=n.split("-").map(x=>x.split("")).flat()
  
  for (let index = 0; index < L.length; index++) {
    const element = L[index];
    if(!checkSymbol(element)){
      return false
    }
  }

  function checkSymbol(s) {
    const listSymbols = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    return listSymbols.includes(s);
  }

  return true
}
module.exports = {
  isMAC48Address,
};

let a='00-1B-63-84-45-E6'

b='Z1-1B-63-84-45-E6'
c='not a MAC-48 address'

f='FF-FF-FF-FF-FF-FF'
g='G0-00-00-00-00-00'

console.log(isMAC48Address(b))