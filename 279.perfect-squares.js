/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let res = Infinity;
  const number = Math.floor(Math.sqrt(n));
  // [1,4,9,16];
  const arr = new Array(number).fill(1).map((el, i) => (i + 1) * (i + 1));

  const subFunc = (arr2, count) => {
    let subArr = [];
    for (let j = 0; j < arr2.length; j++) {
      for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr2[j] - arr[i];
        if (temp === 0) {
          res = count + 1;
          return;
        }
        if (temp > 0) {
          subArr.push(temp);
        }
      }
    }
    subFunc(subArr, count + 1);
  };

  subFunc([n], 0);

  return res;
};
// @lc code=end
