/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zeroMap = { x: {}, y: {} };
  const xlen = matrix.length;
  const ylen = matrix[0].length;
  for (let i = 0; i < xlen; i++) {
    for (let j = 0; j < ylen; j++) {
      if (matrix[i][j] === 0) {
        zeroMap.x[i] = true;
        zeroMap.y[j] = true;
      }
    }
  }
  console.error(zeroMap)
  for (let i = 0; i < xlen; i++) {
    for (let j = 0; j < ylen; j++) {
      if (zeroMap.x[i] || zeroMap.y[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};
// @lc code=end
