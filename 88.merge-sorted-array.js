/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (34.87%)
 * Total Accepted:    331K
 * Total Submissions: 949.2K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 *
 * Note:
 *
 *
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 *
 *
 * Example:
 *
 *
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * Output: [1,2,2,3,5,6]
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;

  if (nums2[0] < nums1[0]) {
    nums1.unshift(nums2[0]);
    nums1.pop();
    nums2.shift();
  }

  while (i < m + n && nums2.length) {
    if (nums1[i] <= nums2[0] && nums1[i + 1] >= nums2[0]) {
      nums1.splice(i + 1, 0, nums2[0]);
      nums1.pop();
      nums2.shift();
    } else {
      i++;
    }
  }

  let count = nums2.length;

  if (count > 0) {
    nums1.splice(m + n - count, count, ...nums2.slice(-count));
  }

  return nums1;
};
