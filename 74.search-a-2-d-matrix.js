/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) {
    return false;
  }
  let i = 0;
  while (i < matrix.length && matrix[i][0] <= target) {
    i++;
  }
  if (!i) {
    return false;
  }
  const seletedTarget = matrix[i - 1];
  for (let j = 0; j < seletedTarget.length; j++) {
    if (seletedTarget[j] === target) {
      return true;
    }
  }
  return false;
};
// @lc code=end
