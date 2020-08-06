/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let k;
  let j;
  let i = nums.length - 1;

  while (nums[i - 1] >= nums[i] && i > 0) {
    i--;
  }

  if (i === 0) {
    return nums.sort((a, b) => a - b);
  } else {
    k = i - 1;
  }
  i = nums.length - 1;
  while (nums[i] <= nums[k]) {
    i--;
  }
  j = i;

  console.error(k,j)

  let tmp = nums[k];
  nums[k] = nums[j];
  nums[j] = tmp;

  const newArr = nums.slice(k + 1).reverse();

  nums.splice(k + 1, nums.length, ...newArr);

  return nums
};
// @lc code=end
