/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let i = 0;
  while (i <= right) {
    if (nums[i] === 0) {
      nums[i] = nums[left];
      nums[left] = 0;
      i++;
      left++;
    }else if (nums[i] === 2) {
      nums[i] = nums[right];
      nums[right] = 2;
      right--;
    }else if (nums[i] === 1) {
      i++;
    }
  }
  return nums;
};
// @lc code=end
