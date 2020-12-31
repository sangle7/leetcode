/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
const getMinimumDifference = (root) => {
  let min = Infinity;
  let previous = null;
  const aux = (node) => {
    if (!node) {
      return;
    }
    if (node.left) {
      aux(node.left);
    }
    const possibleMin = Math.abs(node.val - previous);
    if (previous !== null && possibleMin < min) {
      min = possibleMin;
    }
    previous = node.val;
    if (node.right) {
      aux(node.right);
    }
  };
  aux(root);
  return min;
};
// @lc code=end
