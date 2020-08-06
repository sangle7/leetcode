/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const num = parseInt(str);
  if (isNaN(num)) {
    return 0;
  }
  if (num < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  }
  if (num > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  return num;
};
// @lc code=end
