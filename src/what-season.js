const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const SEASONS = ["spring", "summer", "autumn (fall)", "winter"];
  if (!date) return "Unable to determine the time of year!";

  try {
    if (!date.getTime()) throw error;
    if (date instanceof Date) {
      let month = date.getMonth();

      switch (month) {
        case 2:
        case 3:
        case 4:
          return SEASONS[0];
        case 5:
        case 6:
        case 7:
          return SEASONS[1];
        case 8:
        case 9:
        case 10:
          return SEASONS[2];
        case 0:
        case 11:
        case 1:
          return SEASONS[3];

        default:
          throw error;
      }
    } else {
      throw error;
    }
  } catch (error) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
