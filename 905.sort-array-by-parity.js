/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let i = 0;
  let solutions = [];
  while (i < A.length) {
    if (A[i] % 2 === 1) {
      solutions.push(A[i])
    } else {
      solutions.unshift(A[i])
    }
    i++;
  }
  return solutions;
};
// @lc code=end
