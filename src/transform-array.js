const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const DISCARD_ITEM = "discard";
  let newArray = arr.slice();
  arr.forEach((x, i) => {
    switch (x) {
      case "--discard-next":
        if (i < newArray.length - 1) {
          newArray[i + 1] = DISCARD_ITEM;
        }
        newArray[i] = DISCARD_ITEM;
        break;

      case "--discard-prev":
        if (i > 0) {
          newArray[i - 1] = DISCARD_ITEM;
        }
        newArray[i] = DISCARD_ITEM;
        break;
      case "--double-next":
        if (i < newArray.length - 1) {
          newArray[i] = newArray[i + 1];
        } else {
          newArray[i] = DISCARD_ITEM;
        }

        break;
      case "--double-prev":
        if (i > 0) {
          newArray[i] = newArray[i - 1];
        } else {
          newArray[i] = DISCARD_ITEM;
        }
        break;
      default:
        break;
    }
  });

  return newArray.filter((el) => el !== DISCARD_ITEM);
}

module.exports = {
  transform
};
