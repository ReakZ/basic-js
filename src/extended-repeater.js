const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
    return "TESTstrADD!";
  }
/* options is an object of options, that contains properties:
repeatTimes sets the number of repetitions of the str;
separator is a string separating repetitions of the str;
addition is an additional string that will be added to each repetition of the str;
additionRepeatTimes sets the number of repetitions of the addition;
additionSeparator is a string separating repetitions of the addition.
*/

  options = {
    repeatTimes: options.repeatTimes || 0,
    separator: options.separator || "+",
    addition: `${options.addition}` || "",
    additionRepeatTimes: options.additionRepeatTimes || 0,
    additionSeparator: options.additionSeparator || "|",
  }
  let result = "";

  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;
    for (let j = 0;  j < options.additionRepeatTimes; j++) {
      console.log(options.addition)
      result += options.addition + (j < options.additionRepeatTimes - 1 ? options.additionSeparator : "");
    }
    result += (i < options.repeatTimes - 1) ? options.separator : "";
  }
console.log(result)
  return result;
}

module.exports = {
  repeater
};


const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};

let res=repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion })
  //console.log(res)