/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 1) {
    return true;
  }
  var temp = n;
  while (temp > 3) {
    temp = temp / 3;
  }
  return temp === 3;
};
