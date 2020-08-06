/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let res;
  let tmpgap = Infinity;
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        const gap = Math.abs(sum - target);
        if (gap === 0) {
          return target;
        }
        if (gap < tmpgap) {
          tmpgap = gap;
          res = sum;
        }
      }
    }
  }
  return res;
};

// @lc code=end
