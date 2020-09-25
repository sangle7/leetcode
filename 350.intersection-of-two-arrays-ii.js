/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  const res = []
  for(let i=0;i<nums1.length;i++){
      const index = nums2.indexOf(nums1[i]) 
      if(nums2.indexOf(nums1[i]) > -1){
          nums2.splice(index,1)
          res.push(nums1[i])
      }
  }
  return res;
};
// @lc code=end

