/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function (root) {
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
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i].left && temp.unshift(arr[i].left);
      arr[i].right && temp.unshift(arr[i].right);
    }

    subFunc(temp);
  };

  subFunc([root]);

  return solutions.map((arr) => arr[0]);
};
// @lc code=end
