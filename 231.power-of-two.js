/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }
  var temp = n;
  while (temp > 2) {
    temp = temp / 2;
  }
  return temp === 2;
};
