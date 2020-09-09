/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] == 0) {
    return 0;
  }
  if (s.indexOf('00') > -1) {
    return 0;
  }

  let notValidCount = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] > 2 || (s[i] === '2' && s[i + 1] > 6)) {
      notValidCount++;
    }

    if (s[i] === '0') {
      notValidCount += 2;
      if (s[i - 1] && s[i - 1] > 2) {
        return 0;
      }
    }
  }
  if (s[s.length - 1] === '0') {
    if (s[s.length - 2] > 2) {
      return 0;
    }
    if (s.length < 3 || s[s.length - 3] === '0') {
      notValidCount++;
    } else {
      notValidCount += 2;
    }
  }
  return s.length - notValidCount;
};
// @lc code=end
