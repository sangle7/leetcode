/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const subfunc = (arr, out, j) => {
    if (out.length === j) {
      res.push(out);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let newarr = arr.slice(i + 1);
        subfunc(newarr, out.concat(arr[i]), j);
      }
    }
  };
  for (let i = 0; i <= nums.length; i++) {
    subfunc(nums, [], i);
  }
  return res;
};
// @lc code=end
