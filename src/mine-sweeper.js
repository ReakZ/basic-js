const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
let table=[]

for (let index = 0; index < matrix.length; index++) {
 table.push(new Array(matrix[0].length).fill(0))
}
  for (let i = 0; i < matrix.length; i++) {

     for (let y = 0; y < matrix[i].length; y++) {
      let currentCount=0

      if(matrix[i][y-1]){

        currentCount++
      }
      if(matrix[i][y+1]){

        currentCount++
      }
      if(matrix[i-1]&&matrix[i-1][y]){
        currentCount++
      }
      if(matrix[i+1]&&matrix[i+1][y]){
        currentCount++
      }

      if(matrix[i+1]&&matrix[i+1][y+1]){
        currentCount++
      }
      if(matrix[i+1]&&matrix[i+1][y-1]){
        currentCount++
      }

      if(matrix[i-1]&&matrix[i-1][y+1]){
        currentCount++
      }
      if(matrix[i-1]&&matrix[i-1][y-1]){
        currentCount++
      }
      table[i][y]=currentCount
     }
  }

return table
}

module.exports = {
  minesweeper
};
