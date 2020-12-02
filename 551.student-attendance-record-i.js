/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  if (/L{3}/.test(s)) {
    return false;
  }
  const obj = s.split('').reduce((pre, el) => {
    pre[el] = pre[el] || 0;
    pre[el]++;
    return pre;
  }, {});

  if (obj.A > 1) {
    return false;
  }
  return true;
};
// @lc code=end
