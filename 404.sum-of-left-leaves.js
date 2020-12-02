/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  function dfs(node) {
      let ans = 0
      if (node !== null) {
          if (node.left && node.left.left === null && node.left.right === null) {
              ans += node.left.val
          }
          ans = ans + dfs(node.left) + dfs(node.right)
      }
      return ans
  }
  return dfs(root)
};

// @lc code=end

