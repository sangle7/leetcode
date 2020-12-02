/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  if (!s) {
    return 0;
  }
  const arr = s.split(' ');
  return arr.reduce((pre, elem) => {
    if (elem) {
      pre++;
    }

    return pre;
  }, 0);
};
// @lc code=end
