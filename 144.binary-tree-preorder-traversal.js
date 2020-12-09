/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const arr = [];
  const subFunc = (node) => {
    arr.push(node.val);
    if (node.left) {
      subFunc(node.left);
    }
    if (node.right) {
      subFunc(node.right);
    }
  };
  subFunc(root);

  return arr;
};
// @lc code=end
