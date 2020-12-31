/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Design Add and Search Words Data Structure
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.wordDictionary = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  const subFunc = (index, obj) => {
    if (index >= word.length) {
      return {};
    }
    obj[word[index]] = subFunc(index + 1, obj[word[index]] || {});
    return obj;
  };
  this.wordDictionary = subFunc(0, this.wordDictionary);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const subFunc = (index, obj) => {
    if (index >= word.length) {
      return Object.keys(obj).length === 0;
    }
    if (!obj[word[index]]) {
      return false;
    }
    return subFunc(index + 1, obj[word[index]]);
  };
  return subFunc(0, this.wordDictionary);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
