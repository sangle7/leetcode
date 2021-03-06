/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const solutions = [];

  const subFunc = (arr, out) => {
    const sumOut = sum(out);
    if (sumOut === target) {
      solutions.push(out);
    }
    if (sumOut < target) {
      for (let i = 0; i < arr.length; i++) {
        const newOut = [...out, arr[i]];
        subFunc(arr.slice(i), newOut);
      }
    }
  };

  function sum(arr) {
    return arr.reduce((pre, elem) => pre + elem, 0);
  }

  subFunc(candidates, []);
  return solutions;
};
// @lc code=end
