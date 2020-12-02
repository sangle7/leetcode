/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return /^([A-Z]+|[a-z]+|[A-Z][a-z]+)$/.test(word);
};
// @lc code=end
