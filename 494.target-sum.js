/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  let count = 0;

  const subFunc = (arr, sum) => {
    if (!arr.length && sum === S) {
      count++;
    }
    if (!arr.length) {
      return;
    }
    subFunc(arr.slice(1), sum + arr[0]);
    subFunc(arr.slice(1), sum - arr[0]);
  };

  subFunc(nums, 0);

  return count;
};
// @lc code=end
