/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 // Recursive
var inorderTraversal = function (root) {
  const res = [];
  // 递归函数
  function _inorder(node) {
    if (!node) return;
    _inorder(node.left);
    res.push(node.val);
    _inorder(node.right);
  }
  _inorder(root);
  return res;
};

/*iteratively
var inorderTraversal = function(root) {
  if (!root) return [];
  const stack = [];
  let cur = root;
  const res = [];
  while (stack.length || cur) {
    // 左节点都先压入栈
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    const node = stack.pop();
    res.push(node.val);
    if (node.right != null) {
      cur = node.right;
    }
  }
  return res;
};
 */
// @lc code=end
