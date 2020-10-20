/*
 * @lc app=leetcode id=705 lang=javascript
 *
 * [705] Design HashSet
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.hashSet = {};
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.hashSet[key] = true;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  this.hashSet[key] = false;
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return Boolean(this.hashSet[key])
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end
