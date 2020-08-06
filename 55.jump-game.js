/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums, index) {
  if (index === 0 || nums.length === 1) {
    return true;
  }
  index = index || nums.length - 1;
  for (let i = index; i--; i >= 0) {
    if (nums[i] + i >= index) {
      return canJump(nums, i); //can i be reached?
    }
  }
  return false;
};
// @lc code=end
