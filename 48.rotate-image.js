/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let width = matrix.length;
  let tmp = {};
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width; j++) {
      //matrix[i][j] => matrix[j][matrix.length - 1-i]
      tmp[`${j}_${width - 1 - i}`] = matrix[j][width - 1 - i];
      matrix[j][width - 1 - i] = tmp[i + '_' + j] != undefined  ? tmp[i + '_' + j] : matrix[i][j];
    }
  }
  // return matrix
};
// @lc code=end
