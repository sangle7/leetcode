/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.dict = [];
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    this.dict[i] = sum;
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) {
    return this.dict[j];
  } else {
    return this.dict[j] - this.dict[i - 1];
  }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
