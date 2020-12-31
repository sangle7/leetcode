/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  var len = Math.pow(2, n),
    res = [];
  for (var i = 0; i < len; i++) res.push(i ^ (i >> 1));
  return res;
};
// @lc code=end
