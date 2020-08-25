/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];

  const subfunc = (arr, out) => {
    if (out.length === k) {
      res.push(out);
    } else {
      for (let i = 0, len = arr.length; i < len; i++) {
        let newarr = arr.slice(i + 1); //只看比它大的
        subfunc(newarr, out.concat(arr[i]));
      }
    }
  };

  const arr = Array.from(Array(n + 1).keys());
  arr.shift();

  subfunc(arr, []);

  return res;
};

// @lc code=end
