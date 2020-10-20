/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const arr = [];
  const obj1 = nums1.reduce(tomap, {});
  const obj2 = nums2.reduce(tomap, {});

  for (let key in obj1) {
    if (obj2[key]) {
      arr.push(key);
    }
  }

  return arr
};

function tomap(pre, elem) {
  pre[elem] = true;
  return pre;
}
// @lc code=end
