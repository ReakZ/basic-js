const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  if (matrix.length == 0) return count;
  matrix.forEach((element) => {
    element.forEach(x => {
      if (x==="^^") count++;
    });
  });

  return count;
};
