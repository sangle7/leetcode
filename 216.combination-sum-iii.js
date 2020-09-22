/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  if (n > ((19 - k) * k) / 2) {
    return [];
  }

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const solutions = [];

  const subFunc = (arr, sum, rest) => {
    // console.error(arr, sum, rest);
    if (arr.length > k || sum > n) {
      return;
    }
    if (arr.length === k && sum === n) {
      solutions.push(arr);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      if (sum + rest[i] <= n) {
        const newarr = rest.slice(i + 1);
        subFunc([...arr, rest[i]], sum + rest[i], newarr);
      }
    }
  };

  subFunc([], 0, nums);

  return solutions;
};
// @lc code=end
