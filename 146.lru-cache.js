/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.arr = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const obj = this.arr.find((elem) => elem.key === key);
  const index = this.arr.findIndex((elem) => elem.key === key);
  if (obj) {
    this.arr.splice(index, 1);
    this.arr.push(obj);
    return obj.value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const index = this.arr.findIndex((elem) => elem.key === key);
  if (index !== -1) {
    this.arr.splice(index, 1);
  }
  this.arr.push({ key, value });
  if (this.arr.length > this.capacity) {
    this.arr.shift();
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
