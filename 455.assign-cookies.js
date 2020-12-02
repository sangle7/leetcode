/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  var sortFunc = function (a, b) {
    return a - b;
  };
  g.sort(sortFunc);
  s.sort(sortFunc);
  var i = 0;
  for (var j = 0; i < g.length && j < s.length; j++) {
    if (g[i] <= s[j]) {
      i++;
    }
  }
  return i;
};
// @lc code=end

