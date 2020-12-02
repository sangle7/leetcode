/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const solutions = [];
  if (!root) {
    return solutions;
  }

  const subFunc = (arr) => {
    if (!arr.length) {
      return;
    }
    solutions.unshift(arr.map((e) => e.val));
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
