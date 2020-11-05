/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  var sum = 0;
  var result = [];
  if (!nums || nums.length < 2) {
    return false;
  }
  nums.map(function (a) {
    sum += a;
  });
  console.log(sum);
  if (sum % 2) {
    return false;
  }
  sum /= 2;

  result[0] = true;

  for (var i = 1; i <= nums.length; i++) {
    for (var j = sum; j >= nums[i - 1]; j--) {
      result[j] = result[j] || result[j - nums[i - 1]] ? true : false;
    }
    // console.log(result.map(function(a){return a?" true":"false"}).toString());
  }
  return result[sum];
}

// @lc code=end
