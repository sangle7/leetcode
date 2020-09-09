/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const sorted = nums.sort((a, b) => a - b);
  const res = [];
  const subfunc = (arr, out, j) => {
    if (out.length === j) {
      res.push(out);
    } else {
      let i = 0;
      let k = i + 1;
      while (i < arr.length) {
        let newarr = arr.slice(i + 1);
        subfunc(newarr, out.concat(arr[i]), j);
        while (arr[i] === arr[k]) {
          k++;
        }
        i = k;
      }
    }
  };
  for (let i = 0; i <= sorted.length; i++) {
    subfunc(sorted, [], i);
  }
  return res;
};
// @lc code=end
