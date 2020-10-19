/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = Math.abs(nums[i]);
    nums[temp - 1] = -Math.abs(nums[temp - 1]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      arr.push(i + 1);
    }
  }

  return arr;
};
// @lc code=end
