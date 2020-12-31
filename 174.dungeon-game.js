/*
 * @lc app=leetcode id=174 lang=javascript
 *
 * [174] Dungeon Game
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
/*
  [1,-3,3]
  [0,-2,0]
  [-3,-3,-3]

  dp
  [1,3,3]
  [1,2,2]
  [3,5,5]

  fx
  [2,1,4]
  [2,1,4]
  [1,1,1]
*/
var calculateMinimumHP = function (dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;
  // dp(m)(n) 为到某个点的所需最小值
  // fx(m)(n) 为到某个点的总和
  let dp = new Array(m + 1).fill(1);
  dp = dp.map((el) => new Array(n + 1));

  dp[m][n - 1] = 1;
  dp[m - 1][n] = 1;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[i][j] = Math.max(
        1,
        Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]
      );
    }
  }
  console.error(dp);
  return dp[0][0];
};
// @lc code=end
