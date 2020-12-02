/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  const n = nums.length;
  nums = nums.sort((a, b) => a - b);
  const p = nums[0] * nums[1] * nums[n - 1];
  return Math.max(p, nums[n - 1] * nums[n - 2] * nums[n - 3]);
};
// @lc code=end
