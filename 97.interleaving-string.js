/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  let state = false;
  const dfs = (i, j, index) => {
    if (!state) {
      if (index === s3.length) {
        state = true;
      }
      if (s1[i] === s3[index]) {
        dfs(i + 1, j, index + 1);
      }
      if (s2[j] === s3[index]) {
        dfs(i, j + 1, index + 1);
      }
    }
  };

  dfs(0, 0, 0);

  return state;
};
// @lc code=end
