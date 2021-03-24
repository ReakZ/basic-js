const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) {
    throw new Error();
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
};
