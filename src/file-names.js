const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let object = {};
  let result = [];
  for (let index = 0; index < names.length; index++) {
    let ztr=`${names[index]}`
    if (object[ztr]>=0) {
      object[ztr] = object[ztr] + 1;
      result.push(`${ztr}(${object[ztr]})`);

    } else {
      object[ztr] = 0;

      if(result.includes(`${ztr}`)){
       object[ztr] += 1;
       result.push(`${ztr}(${object[ztr]})`);
      }else{
        result.push(ztr);
      }

    }
  }

  return result;
}

module.exports = {
  renameFiles,
};

