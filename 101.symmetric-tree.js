/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function (root) {
  if (root == null) return true;
  return isMirror(root.left, root.right);
};

function isMirror(leftSub, rightSub) {
  if (leftSub == null && rightSub == null) {
    return true;
  }
  if (leftSub == null || rightSub == null) {
    return false;
  }
  return (
    leftSub.val === rightSub.val &&
    isMirror(leftSub.left, rightSub.right) &&
    isMirror(leftSub.right, rightSub.left)
  );
}
// @lc code=end
