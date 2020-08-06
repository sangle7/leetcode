/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length) {
    return [-1, -1];
  }
  let right = nums.length - 1;
  let left = 0;

  return bbb(left, right);

  function bbb(left, right) {
    if (right === left - 1 || (right === left && nums[left] !== target)) {
      return [-1, -1];
    }
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
      return bbb(left, right);
    }
    if (nums[mid] < target) {
      left = mid + 1;
      return bbb(left, right);
    }
    if (nums[mid] === target) {
      let i = 0;
      while (nums[mid - i] === nums[mid]) {
        i++;
      }
      let j = 0;
      while (nums[mid + j] === nums[mid]) {
        j++;
      }

      return [mid - i + 1, mid + j - 1];
    }
  }
};

// @lc code=end
