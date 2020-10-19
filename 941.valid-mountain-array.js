/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let i = 0;
  while (A[i] < A[i + 1]) {
    i++;
  }
  let j = i;
  while (A[i] > A[i + 1]) {
    i++;
  }
  if (j > 0 && j < A.length - 1 && i == A.length - 1) {
    return true;
  }
  return false;
};
// @lc code=end
