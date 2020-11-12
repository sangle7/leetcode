/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
//  Dynamic Programming ，维护一个一维的 dp 数组，这个 DP 算法需要遍历两遍数组，第一遍在 dp[i] 中存入i位置左边的最大值，然后开始第二遍遍历数组，第二次遍历时找右边最大值，然后和左边最大值比较取其中的较小值，然后跟当前值 A[i] 相比，如果大于当前值，则将差值存入结果
var trap = function (height) {
  let res = 0;
  let mx = 0;
  let n = height.length;
  let dp = {};
  dp[n] = 0;
  for (let i = 0; i < n; i++) {
    dp[i] = mx;
    mx = Math.max(mx, height[i]);
  }
  mx = 0;
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = Math.min(dp[i], mx);
    mx = Math.max(mx, height[i]);
    if (dp[i] > height[i]) res += dp[i] - height[i];
  }
  return res;
};
// @lc code=end
