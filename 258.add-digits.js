/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while (num > 9) {
    const str = String(num);
    const arr = str.split('');
    num = arr.reduce((pre, elem) => {
      pre += Number(elem);
      return pre;
    }, 0);
  }

  return num
};
