/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) {
    return null;
  }
  const arr = [];
  const subFunc = (node) => {
    arr.push(node);
    if (!node.left && !node.right) {
      return;
    }
    node.left && subFunc(node.left);
    node.right && subFunc(node.right);
  };
  subFunc(root);
  arr.forEach((elem, index) => {
    elem.left = null;
    elem.right = arr[index + 1] || null;
    // elem.right = null
  });
  return arr[0];
};
// @lc code=end
