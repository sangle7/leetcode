/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder || !inorder || preorder.length <= 0 || inorder.length <= 0) {
      return null;
  }

  const val =  preorder.shift();
  const node = new TreeNode(val);
  const index = inorder.indexOf(val);
  const inorderLeft = inorder.slice(0,index);
  const inorderRight = inorder.slice(index + 1);
  const preOrderLeft = preorder.slice(0, inorderLeft.length);
  const preOrderRight = preorder.slice(inorderLeft.length);

  node.left = buildTree(preOrderLeft,inorderLeft);
  node.right = buildTree(preOrderRight,inorderRight);

  return node;
};
// @lc code=end

