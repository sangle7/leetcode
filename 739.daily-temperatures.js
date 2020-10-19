/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const array = [];
  const stack = [];

  for (let i = 0; i < T.length; i++) {
    while (stack.length && stack[stack.length - 1].value < T[i]) {
      array[stack[stack.length - 1].index] = i - stack[stack.length - 1].index;
      stack.pop();
    }
    stack.push({
      index: i,
      value: T[i],
    });
  }

  for (let i = 0; i < T.length; i++) {
    array[i] = array[i] || 0;
  }

  return array;
};
// @lc code=end
