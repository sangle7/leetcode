/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const solutions = [];
  if (!root) {
    return solutions;
  }

  const subFunc = (node, arr, tempSum) => {
    // leaf node
    if (!node.left && !node.right) {
      if (tempSum + node.val === sum) {
        solutions.push([...arr, node.val]);
      }
      return;
    }
    node.left && subFunc(node.left, [...arr, node.val], tempSum + node.val);
    node.right && subFunc(node.right, [...arr, node.val], tempSum + node.val);
  };

  subFunc(root, [], 0);

  return solutions;
};
// @lc code=end
