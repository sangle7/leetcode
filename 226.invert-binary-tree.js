/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root === null || (root.right === null && root.left === null)){
      return root;    
  }
  var temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;

};
// @lc code=end
