/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let maxans = 0;
  const dp = new Array(s.length).fill(0);
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ')') {
      //右括号前边是左括号
      if (s[i - 1] === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
        //右括号前边是右括号，并且除去前边的合法序列的前边是左括号
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] =
          dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      maxans = Math.max(maxans, dp[i]);
    }
  }
  // console.log(dp);
  return maxans;
};
// @lc code=end
