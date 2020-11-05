/*
 * @lc app=leetcode id=385 lang=javascript
 *
 * [385] Mini Parser
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  /** 包含负数的正则表达式，用于截取数字 */
  const numberReg = new RegExp(/([\-0-9]*)/);
  const process = (str, start, end) => {
    const child = new NestedInteger();
    // 若本层的 NestedInteger 仅仅包含一个数字
    if (str[start] !== '[') {
      /** 用正则表达式截取起始位置开始的第一个数字 */
      const number = numberReg.exec(str.substr(start, str.length - start))[0];
      child.setInteger(number);
    } else {
      // 若本层包含一个list，则遍历 start+1 -> end - 1 的字符，将其分割成小的 object 继续递归
      let left = start + 1;
      // 以逗号为分割点，需要区分是否为同一层的逗号。
      // 当左括号、右括号之和为0时，遍历遇到的逗号为本层的逗号。
      let bracketsCount = 0;
      for (let i = left; i < end; i++) {
        // 记录左右括号之和
        if (str[i] === '[') {
          bracketsCount++;
        } else if (str[i] === ']') {
          bracketsCount--;
        }
        // 当遇到逗号且左右括号之和为0时，即为本层逗号。
        if (bracketsCount === 0 && str[i] === ',') {
          child.add(process(str, left, i - 1));
          left = i + 1;
          continue;
        }
        // 当遍历到结尾时，将处理最后一个 object。
        if (i === end - 1) {
          child.add(process(str, left, i));
        }
      }
    }
    return child;
  };
  return process(s, 0, s.length - 1);
};

// @lc code=end
