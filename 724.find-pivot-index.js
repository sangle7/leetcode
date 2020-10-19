/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((pre, elem) => pre + elem, 0);
  let leftSum = 0;
  let index = 0;
  while (index < nums.length) {
    leftSum += index ? nums[index - 1] : 0;
    if (leftSum * 2 + nums[index] === sum) {
      return index;
    }
    index++;
  }
  return -1;
};
// @lc code=end
