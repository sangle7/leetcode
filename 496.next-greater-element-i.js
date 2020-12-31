/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  // const fNLength = findNums.length;
  const nLength = nums.length;
  let outPut = [];
  
  
  findNums.forEach(function(i,index){
      const numIndex = nums.indexOf(i);
      let foundAGreater=false;
      for(var it=numIndex+1; it<=nLength; it++){
          if(i<nums[it]){ outPut.push(nums[it]); foundAGreater=true; break;}
      }
      if(!foundAGreater){outPut.push(-1)}
  });
  
  return outPut;
};
// @lc code=end

