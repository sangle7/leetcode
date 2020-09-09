/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let sortedCandidates = candidates.sort((a, b) => a - b);
  const solutions = [];

  const subFunc = (arr, out) => {
    const sumOut = sum(out);
    if (sumOut === target) {
      solutions.push(out);
    }
    if (sumOut < target) {
      let i = 0;
      while (i < arr.length) {
        const newOut = [...out, arr[i]];
        subFunc(arr.slice(i + 1), newOut);
        let j = i + 1;
        while (arr[i] === arr[j]) {
          j++;
        }
        i = j;
      }
    }
  };

  function sum(arr) {
    return arr.reduce((pre, elem) => pre + elem, 0);
  }

  subFunc(sortedCandidates, []);

  return solutions;
};
// @lc code=end
