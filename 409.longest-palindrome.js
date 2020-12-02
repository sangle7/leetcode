/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const obj = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] || 0;
    obj[s[i]]++;
  }
  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      count += obj[key];
      obj[key] = 0;
    } else {
      const s = 2 * Math.floor(obj[key] / 2);
      count += s;
      obj[key] -= s;
    }
  }
  let temp = 0;
  for (let key in obj) {
    if (obj[key]) {
      temp = 1;
    }
  }
  return count + temp;
};
// @lc code=end
