/*
 * @lc app=leetcode id=380 lang=javascript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.set = {};
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.set[val]) {
    return false;
  }
  this.set[val] = 1;
  this.arr = Object.keys(this.set);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.set[val]) {
    delete this.set[val];
    this.arr = Object.keys(this.set);
    return true;
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomKey = Math.floor(Math.random() * this.arr.length);
  return this.arr[randomKey];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
