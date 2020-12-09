/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  s = s.trim();
  if (s !== '' && /^[-+]?(\d+\.?|\.\d+)\d*([e|E][-+]?\d+)?$/.test(s)) {
    return true;
  }
  return false;
};
// @lc code=end
