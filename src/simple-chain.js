const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    const output = this.chain.join`~~`;
    this.chain = [];
    return output;
  },
};

module.exports = chainMaker;
