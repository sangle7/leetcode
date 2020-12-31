/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const map = wordDict.reduce((pre, ele) => {
    pre[ele] = true;
    return pre;
  }, {});

  const memo = {};

  const dfs = (s) => {
    if (memo[s]) {
      return memo[s];
    }
    if (!s) {
      return [''];
    }
    let res = [];
    for (let key in map) {
      const temp = s.substr(0, key.length);
      if (key !== temp) {
        continue;
      }
      let remain = dfs(s.substr(key.length));
      for (let r of remain) {
        res.push(key + (r ? ' ' : '') + r);
      }
    }
    memo[s] = res;
    return res;
  };

  return dfs(s);
};
// @lc code=end
