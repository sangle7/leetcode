/*
 * @lc app=leetcode id=506 lang=javascript
 *
 * [506] Relative Ranks
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  var sorted = nums.slice();

  sorted.sort(function (a, b) {
    return b - a;
  });

  nums.forEach(function (v, i) {
    if (sorted.indexOf(nums[i]) == 0) nums[i] = 'Gold Medal';
    else if (sorted.indexOf(nums[i]) == 1) nums[i] = 'Silver Medal';
    else if (sorted.indexOf(nums[i]) == 2) nums[i] = 'Bronze Medal';
    else {
      nums[i] = (sorted.indexOf(nums[i]) + 1).toString();
    }
  });

  return nums;
};
// @lc code=end
