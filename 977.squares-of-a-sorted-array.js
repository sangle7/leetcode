/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let i = 0;
  while (A[i] < 0) {
    i++;
  }
  const lowers = A.slice(0, i);
  let uppers = A.slice(i);

  let j = lowers.length - 1;
  let k = 0;


  while (j >= 0 && k < uppers.length) {
    if (k === 0 && uppers[k] > -lowers[j]) {
      uppers.splice(0, 0, lowers[j]);
      j--;
    }else if (uppers[k] <= -lowers[j] && uppers[k + 1] >= -lowers[j]) {
      uppers.splice(k + 1, 0, lowers[j]);
      j--;
    } else {
      k++;
    }
  }

  if (j > -1) {
    uppers = uppers.concat(lowers.slice(0, j + 1).reverse());
  }

  return uppers.map((e) => e * e);
};
// @lc code=end
