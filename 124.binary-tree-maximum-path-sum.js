/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
var maxPathSum = function (root) {
  let max = -Infinity;
  let start = root;
  const f = (node) => {
    if (!node) {
      return 0;
    }
    if (node.max) {
      return node.max;
    }
    let maxRight = f(node.right);
    let maxLeft = f(node.left);
    node.max = Math.max(maxLeft + node.val, maxRight + node.val, node.val);

    let temp = maxRight + maxLeft + node.val;

    max = Math.max(max, temp, node.max);
    
    return node.max;
  };
  f(start);
  return max;
};
// @lc code=end
