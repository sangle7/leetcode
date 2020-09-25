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
var isValidBST = function (root) {
  let state = true;
  if (!root) {
    return true;
  }
  const subFunc = (node) => {
    if (!node.left && !node.right) {
      return;
    }
    if (node.left) {
      if (node.left.val >= node.val) {
        state = false;
      } else {
        subFunc(node.left);
      }
    }

    if (node.right) {
      if (node.right.val <= node.val) {
        state = false;
      } else {
        subFunc(node.right);
      }
    }
  };
  subFunc(root);
  return state;
};
// @lc code=end
