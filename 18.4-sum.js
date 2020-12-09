/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  var len = nums.length;
  var res = [];
  if (nums.length < 4 || !nums) return res;
  if (len === 4 && nums[0] + nums[1] + nums[2] + nums[3] == target)
    return [nums];
  //排序
  nums = nums.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < len - 3; i++) {
    //判断相等项
    // if(nums[i]===nums[i-1]) continue;
    for (var j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      var start = j + 1,
        end = len - 1;
      while (start < end) {
        var sum = nums[i] + nums[j] + nums[start] + nums[end];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[start], nums[end]]);
          ++start;
          --end;
        } else if (nums[i] + nums[j] + nums[start] + nums[end] > target) {
          --end;
        } else {
          ++start;
        }
      }
    }
  }
  //去重
  var hash = {};
  var result = [];
  res.forEach((item) => {
    if (!hash[item]) {
      result.push(item);
      hash[item] = true;
    }
  });
  return result;
};
// @lc code=end
