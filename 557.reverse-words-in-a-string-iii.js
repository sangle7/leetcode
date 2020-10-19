/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('').reverse().join('')
  }
  return arr.join(' ')
};
// @lc code=end
