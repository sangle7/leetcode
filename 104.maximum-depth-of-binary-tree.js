/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let depth = 1;

  const subFunc = (node, d) => {
    if (node) {
      subFunc(node.left, d + 1);
      subFunc(node.right, d + 1);
    } else {
      depth = Math.max(d, depth);
    }
  };

  subFunc(root.left, 1);
  subFunc(root.right, 1);

  return depth;
};
// @lc code=end
