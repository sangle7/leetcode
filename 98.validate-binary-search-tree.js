/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function (root, min, max) {
  if (!root) return true;
  if (max !== null && root.val >= max) {
    return false;
  }
  if (min !== null && root.val <= min) {
    return false;
  }
  const leftSide = isValidBST(root.left, min, root.val);
  const rightSide = isValidBST(root.right, root.val, max);

  return leftSide && rightSide;
};
// @lc code=end
