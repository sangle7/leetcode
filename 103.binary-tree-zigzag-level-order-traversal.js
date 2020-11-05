/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let solutions = [];
  if (!root) {
    return solutions;
  }
  //Breadth-First
  const subFunc = (array, leftToRight) => {
    if (!array.length) {
      return;
    }
    if (leftToRight) {
      solutions.push(array.map((e) => e.val).reverse());
    } else {
      solutions.push(array.map((e) => e.val));
    }
    let res = [];
    for (let item of array) {
      item.left && res.push(item.left);
      item.right && res.push(item.right);
    }
    subFunc(res, !leftToRight);
  };
  subFunc([root], false);
  return solutions;
};
// @lc code=end
