/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const len = s.length;

  const palindromeMap = {};

  const subFunc = (index, arr) => {
    if (index >= s.length) {
      result.push(arr);
    }
    for (let i = 1; i <= len - index; i++) {
      const substr = s.substring(index, index + i);
      if (palindromeMap[index + '_' + index + i] || validPalindrome(substr)) {
        palindromeMap[index + '_' + index + i] = true;
        subFunc(index + i, [...arr, substr]);
      }
    }
  };

  subFunc(0, []);

  return result;
};

function validPalindrome(str) {
  let i = 0;
  let temp = '';
  while (i < str.length) {
    temp = str[i] + temp;
    i++;
  }

  return temp === str;
}
// @lc code=end
