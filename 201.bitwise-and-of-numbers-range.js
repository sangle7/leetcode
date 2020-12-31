/*
 * @lc app=leetcode id=201 lang=javascript
 *
 * [201] Bitwise AND of Numbers Range
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  let d = Infinity;
  while ((m & d) !== (n & d)) {
      d <<= 1;
  }
  return m & d;
};
// @lc code=end
