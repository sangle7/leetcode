/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num === 1) {
    return false;
  }
  let sum = 1;
  let i = num - 1;
  while (i >= Math.sqrt(num)) {
    let temp = num / i;
    if (Number.isInteger(temp)) {
      sum += i;
      sum += temp;
    }
    if (sum > num) {
      return false;
    }
    i--;
  }
  return sum === num;
};
// @lc code=end
