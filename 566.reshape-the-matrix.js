/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  var x = nums.length;
  var y = nums[0].length;
  var arr = [];
  var ret = [];
  if (x * y == r * c) {
    for (var i = 0; i < x; i++) {
      arr = arr.concat(nums[i]);
    }
    for (i = 0; i < r; i++) {
      ret.push([]);
      for (var j = 0; j < c; j++) {
        ret[i][j] = arr[i * c + j];
      }
    }
    return ret;
  } else {
    return nums;
  }
};
// @lc code=end
