/*
 * @lc app=leetcode id=336 lang=javascript
 *
 * [336] Palindrome Pairs
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const solutions = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && checkValid(words[i] + words[j])) {
        solutions.push([i, j]);
      }
    }
  }

  return solutions

  function checkValid(str) {
    let start = 0;
    let end = str.length - 1;
    while (end > start) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
};
// @lc code=end
