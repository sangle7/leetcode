/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  if (!nums.length) {
    return 1;
  }
  const arr = new Array(nums.length);

  for (let item of nums) {
    arr[item] = 1;
  }

  for (let i = 1; i < arr.length; i++) {
    if (!arr[i]) {
      return i;
    }
  }
  return arr.length;
};
// @lc code=end
