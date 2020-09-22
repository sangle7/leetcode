/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const len = nums.length;
  const minCount = len / 3;
  const obj = {};
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] || 0;
    obj[nums[i]]++;
  }
  for (let key in obj) {
    if (obj[key] > minCount) {
      res.push(key);
    }
  }
  return res
};
// @lc code=end
