/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let leftProduct = [];
  let rightProduct = [];

  let i = 0;
  let product = 1;
  while (i < nums.length) {
    product = product * nums[i];
    leftProduct[i] = product;
    i++;
  }
  product = 1;
  i--;
  while (i >= 0) {
    product = product * nums[i];
    rightProduct[i] = product;
    i--;
  }

  const res = [];
  res[0] = rightProduct[1];
  for (let j = 1; j < nums.length - 1; j++) {
    res[j] = leftProduct[j - 1] * rightProduct[j + 1];
  }
  res.push(leftProduct[nums.length - 2]);
  return res;
};
// @lc code=end
