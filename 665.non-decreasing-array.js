/*
 * @lc app=leetcode id=665 lang=javascript
 *
 * [665] Non-decreasing Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  if (nums.length < 2) {
    return true;
  }
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] < nums[i]) {
      nums[i + 1] = nums[i];
      count++;
    }
  }
  if (count === 0) {
    return true;
  }
  if (count !== 1) {
    return false;
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] < nums[i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
