/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const newS = s.split('').join('#');
  let N = newS.length;
  let count = s.length;
  for (let i = 0; i < N; i++) {
    let n = 1;
    while (i - n >= 0 && i + n < N && newS[i - n] === newS[i + n]) {
      if (newS[i - n] !== '#') {
        count++;
      }
      n++;
    }
  }
  return count;
};

// @lc code=end
