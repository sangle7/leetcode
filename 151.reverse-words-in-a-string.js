/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(' ');
  const str = arr.reduce((pre, elem) => {
    if (elem) {
      pre = pre ? elem + ' ' + pre : elem;
    }
    return pre;
  }, '');
  return str;
};
// @lc code=end
