const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here


      return Array.isArray(arr) ? (1 + Math.max(...arr.map(el => this.calculateDepth(el.length === 0 ? [1] : el)))) : 0;
    
  }
};