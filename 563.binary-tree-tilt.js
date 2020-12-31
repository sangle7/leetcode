/*
 * @lc app=leetcode id=563 lang=javascript
 *
 * [563] Binary Tree Tilt
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
const findTilt = (root) => {
  function helper(root) {
    if (!root) {
      return 0;
    }
    const left = helper(root.left);
    const right = helper(root.right);

    sum += Math.abs(left - right);
    return root.val + left + right;
  }
  let sum = 0;
  helper(root);
  return sum;
};
// @lc code=end
