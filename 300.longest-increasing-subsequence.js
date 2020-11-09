/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//[2,5,3,7,6,11] => 4
var lengthOfLIS = function (nums) {
  if (!nums.length) {
    return 0;
  }
  let max = 1;
  let min = Infinity;

  const subFunc = (index, len) => {
    max = Math.max(max, len);
    let isFirstTime = true;
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[i] > nums[index] && (isFirstTime || nums[i] < nums[i - 1])) {
        subFunc(i, len + 1);
        isFirstTime = false;
      }
    }
  };

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      subFunc(i, 1);
    }
  }

  return max;
};
// @lc code=end
