/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
var sumNumbers = function (root) {
  if (!root) {
    return 0;
  }
  let result = 0;
  const subFunc = (node, prev) => {
    let sum = prev * 10 + node.val;
    if (!node.left && !node.right) {
      result += sum;
    }
    if (node.left) {
      subFunc(node.left, sum);
    }
    if (node.right) {
      subFunc(node.right, sum);
    }
  };

  subFunc(root, 0);

  return result;
};
// @lc code=end
