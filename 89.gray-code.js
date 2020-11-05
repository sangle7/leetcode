/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  if(!n){
    return [0]
  }
  const strZero = '0'.repeat(n);
  const strOne = '1'.repeat(n);
  const str = strZero + strOne + strZero;

  const arr = [];

  for (let i = 0; i < str.length - n; i++) {
    arr.push(str.substring(i, i + n));
  }

  return arr.map((e) => toNumber(e));
};

function toNumber(str) {
  const len = str.length;
  return str.split('').reduce((pre, el, index) => {
    return pre + parseInt(el) * Math.pow(2, len - 1 - index);
  }, 0);
}
// @lc code=end
