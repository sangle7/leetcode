/*
 * @lc app=leetcode id=611 lang=javascript
 *
 * [611] Valid Triangle Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  let len = nums.length;
  if(len < 3){
      return 0;
  }
  let count = 0;
  nums.sort((a, b) => a - b);
  for(let i = 0; i < len; ++i){
      for(let j = i + 1; j < len; ++j){
          for(let k = j + 1; k < len; ++k){
              if(nums[k] >= nums[i] + nums[j]){
                  break;
              }
              else{
                  count++;
              }
          }
      }
  }
  return count;
};

// @lc code=end
