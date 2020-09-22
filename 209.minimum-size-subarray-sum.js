/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  const sumMap = [];
  let minLen = Infinity;
  const sum = nums.reduce((pre, elem, index) => {
    const tmp = pre + elem;
    sumMap[index] = tmp;
    return tmp;
  }, 0);
  if (sum < s) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= s) {
      return 1;
    }
    let j = Math.min(nums.length - 1, i + minLen - 1);
    let tempSum = i ? sumMap[j] - sumMap[i - 1] : sumMap[j];
    let tempMin = Infinity;

    while (tempSum >= s && j >= i) {
      tempMin = j - i + 1;
      tempSum -= nums[j];
      j--;
    }
    minLen = Math.min(minLen, tempMin);
  }

  return Math.min(minLen, nums.length);
};
// @lc code=end
