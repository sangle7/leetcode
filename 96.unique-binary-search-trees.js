/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  // res[i]表示以1...i为节点组成的二叉搜索树的种类
  let res = new Array(n+1).fill(0);
  res[0] = 1;
  res[1] = 1;
  
  // res[1]已经确定，因此从2开始
  for (let i = 2; i <= n; i++) {
      // j表示分别从1为根节点至i为根节点
      for (let j = 1; j <= i; j++) {
          res[i] += res[j-1] * res[i-j];
      }
  }
  return res[n];
};

// @lc code=end
