/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (nums.length <= 1) return false;
  const map = {};

  for (let i in nums) {
    var v = nums[i];
    if (map[v] && i - map[v] <= k) {
      return true;
    }
    map[v] = i;
  }
  return false;
};
