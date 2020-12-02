/*
 * @lc app=leetcode id=521 lang=javascript
 *
 * [521] Longest Uncommon Subsequence I
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  if (a === b) {
    return -1;
  }
  if (a.length === b.length) {
    return a.length;
  }
  let long = a;
  let short = b;
  if (a.length < b.length) {
    [long, short] = [short, long];
  }
  return long.length;
};
// @lc code=end
