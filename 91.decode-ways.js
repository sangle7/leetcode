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
  let validCount = 0;
  const subFunc = (str) => {
    if (!str) {
      validCount++;
      return;
    }
    // 首位是0就不管了
    if (str[0] != 0) {
      subFunc(str.substr(1));
      if (str.length > 1 && str.substr(0, 2) < 27) {
        subFunc(str.substr(2));
      }
    } else {
      return;
    }
  };

  subFunc(s);

  return validCount;
};
// @lc code=end
