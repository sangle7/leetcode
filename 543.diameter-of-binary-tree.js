/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
var diameterOfBinaryTree = function(root) {
  if(root == null) return 0
  
  var depth = function(root) {
      if(root == null) return 0
      return Math.max(depth(root.left),depth(root.right)) + 1
  }
  
  let diameter = depth(root.left) + depth(root.right)
  let left_diameter = diameterOfBinaryTree(root.left)
  let right_diameter = diameterOfBinaryTree(root.right)
  return Math.max(diameter,Math.max(left_diameter,right_diameter))
};
// @lc code=end

