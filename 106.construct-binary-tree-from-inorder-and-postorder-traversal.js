/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

  if(!inorder || !postorder || inorder.length <= 0 || postorder.length < 0){
      return null;
  }

  const val = postorder.pop();
  const node = new TreeNode(val);
  const index = inorder.indexOf(val);

  const inorderLeft = inorder.slice(0, index);
  const inorderRight = inorder.slice(index + 1);
  const postorderLeft = postorder.slice(0, inorderLeft.length);
  const postorderRight = postorder.slice(inorderLeft.length);

  node.left = buildTree(inorderLeft,postorderLeft);
  node.right = buildTree(inorderRight,postorderRight);

  return node;

};

// @lc code=end

