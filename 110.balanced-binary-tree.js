/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return treeHeight(root) === -1 ? false : true;

  /**
   * @return {int} tree's height
   * return -1 if depth differ of the two subtrees are more than 1
   */
  function treeHeight(node) {
    if (node === null) return 0;
    if (node.left === null && node.right === null) return 1;
    var leftH = treeHeight(node.left);
    var rightH = treeHeight(node.right);
    if (leftH === -1 || rightH === -1) return -1;
    if (Math.abs(leftH - rightH) > 1) return -1;
    return Math.max(leftH, rightH) + 1;
  }
};
// @lc code=end
