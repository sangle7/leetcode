/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num < 0) return '-' + convertToBase7(-num);
  if (num < 7) return String(num);
  return convertToBase7(Math.floor(num / 7)) + String(num % 7);
};
// @lc code=end
