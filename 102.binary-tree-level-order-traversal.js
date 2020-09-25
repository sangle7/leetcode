/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
var levelOrder = function (root) {
  const solutions = [];
  if (!root) {
    return solutions;
  }

  const subFunc = (arr) => {
    if (!arr.length) {
      return;
    }
    solutions.push(arr.map((e) => e.val));
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      arr[i].left && temp.push(arr[i].left);
      arr[i].right && temp.push(arr[i].right);
    }

    subFunc(temp);
  };

  subFunc([root]);

  return solutions;
};
// @lc code=end
