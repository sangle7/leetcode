/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if(s.length === 1 || numRows === 1 ){
    return s;
  }
  // const len = s.length;
  // const res = new Array(len)
  const i = 2 * numRows - 2;
  const half = i / 2;
  // const round = Math.floor(len / i);
  // const mod = len % i;
  const arr = new Array(numRows).fill('');
  for (let j = 0; j < s.length; j++) {
    const dis = Math.abs((j % i) - half);
    arr[numRows - 1 - dis] += s[j];
  }
  return arr.join('');
};
// @lc code=end
