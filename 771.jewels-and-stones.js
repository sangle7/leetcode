/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const jewelsMap = J.split('').reduce((pre, elem) => {
    pre[elem] = true;
    return pre;
  }, {});

  return S.split('').reduce((pre, elem) => {
    if (jewelsMap[elem]) {
      pre++;
    }
    return pre;
  },0);
};
// @lc code=end
