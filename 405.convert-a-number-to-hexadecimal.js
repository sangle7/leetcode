/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (!num) {
    return '0';
  }
  num = num > -1 ? num : num + Math.pow(2, 32);
  let res = '',
    Hex = '0123456789abcdef';
  while (num) {
    res = Hex[num % 16] + res;
    num = num / 16 | 0;
  }
  return res;
};
// @lc code=end

