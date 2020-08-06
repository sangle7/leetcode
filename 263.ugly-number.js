/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num == 0) {
    return false;
  }
  while (num) {
    const dividedBy2 = num / 2;
    const dividedBy3 = num / 3;
    const dividedBy5 = num / 5;
    if (Number.isInteger(dividedBy2)) {
      num = dividedBy2;
    } else if (Number.isInteger(dividedBy3)) {
      num = dividedBy3;
    } else if (Number.isInteger(dividedBy5)) {
      num = dividedBy5;
    } else {
      return num === 1;
    }
  }
};
