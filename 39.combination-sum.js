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
  candidates.filter((el) => el <= candidates).sort((a, b) => a - b);
  const solutions = [];
  for (let i = 0; i < candidates.length; i++) {
    if (!target % candidates[i]) {
      solutions.push(new Array(target / candidates[i]).fill(candidates[i]));
    }
    if (target === candidates[i]) {
      candidates = candidates.slice(0, i);
    }
  }
};
// @lc code=end
