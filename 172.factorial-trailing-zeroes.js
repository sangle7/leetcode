/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 *
 * https://leetcode.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (37.26%)
 * Total Accepted:    147.6K
 * Total Submissions: 396.1K
 * Testcase Example:  '3'
 *
 * Given an integer n, return the number of trailing zeroes in n!.
 *
 * Example 1:
 *
 *
 * Input: 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 *
 * Example 2:
 *
 *
 * Input: 5
 * Output: 1
 * Explanation: 5! = 120, one trailing zero.
 *
 * Note: Your solution should be in logarithmic time complexity.
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let result = 0;
  if (n === 0) {
    return 0;
  }
  while (n > 0) {
    n = Math.floor(n / 5);
    result += n;
  }
  return result;
};
