/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (25.52%)
 * Total Accepted:    386.8K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 *
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * Example 1:
 *
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 *
 *
 * Example 2:
 *
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let left = Math.floor((n + m + 1) / 2);
  let right = Math.floor((n + m + 2) / 2);
  return (
    (getKth(nums1, 0, m - 1, nums2, 0, n - 1, left) +
      getKth(nums1, 0, m - 1, nums2, 0, n - 1, right)) /
    2
  );
};
var getKth = function (nums1, start1, end1, nums2, start2, end2, k) {
  let len1 = end1 - start1 + 1;
  let len2 = end2 - start2 + 1;
  if (len1 > len2) return getKth(nums2, start2, end2, nums1, start1, end1, k);
  if (len1 == 0) return nums2[start2 + k - 1];

  if (k == 1) return Math.min(nums1[start1], nums2[start2]);

  let i = start1 + Math.min(len1, Math.floor(k / 2)) - 1;
  let j = start2 + Math.min(len2, Math.floor(k / 2)) - 1;

  if (nums1[i] > nums2[j]) {
    return getKth(
      nums1,
      start1,
      end1,
      nums2,
      j + 1,
      end2,
      k - (j - start2 + 1)
    );
  } else {
    return getKth(
      nums1,
      i + 1,
      end1,
      nums2,
      start2,
      end2,
      k - (i - start1 + 1)
    );
  }
};
