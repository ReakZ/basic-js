const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(members)) {
    return false;
  }
  let team = [];
  members.forEach((element) => {
    if (typeof element === "string") {
      let a = element.trim();
      if (a !== "") {
        team.push(a[0].toUpperCase());
      }
    }
  });

  return team.sort(sortFun).join("");
};

function sortFun(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
