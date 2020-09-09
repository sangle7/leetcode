/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const obj = {};
  for (let i = 0; i <= s.length - 10; i++) {
    const substr = s.substr(i, 10);
    obj[substr] = obj[substr] || 0;
    obj[substr]++;
  }

  const arr = [];
  for (let key in obj) {
    if (obj[key] > 1) {
      arr.push(key);
    }
  }

  return arr;
};
// @lc code=end
