/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  let sum = ((n + 1) * n) / 2;

  for (let elem of nums) {
    sum -= elem;
  }
  return sum;
};
