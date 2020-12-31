/*
 * @lc app=leetcode id=132 lang=javascript
 *
 * [132] Palindrome Partitioning II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
//dp[i] := min cuts of s[0~i]
//dp[i] = min{dp[j] + 1} if s[j+1~i] is a palindrome.
var minCut = function (s) {
  let arr = s.split('');
  let n = s.length;
  let pal = [];
  let cut = [];
  for (let i = 0; i < n; i++) {
    cut[i] = 0;
  }
  for (let i = 0; i < n; i++) {
    pal[i] = [];
    for (let j = 0; j < n; j++) {
      pal[i][j] = false;
    }
  }

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = 0; j <= i; j++) {
      if (arr[i] === arr[j] && (j + 1 > i - 1 || pal[j + 1][i - 1])) {
        pal[j][i] = true;
        min = j === 0 ? 0 : Math.min(min, cut[j - 1] + 1);
      }
    }
    cut[i] = min;
  }
  return cut[n - 1];
};
// @lc code=end
// @lc code=end
