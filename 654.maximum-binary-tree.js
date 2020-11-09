/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const subFunc = (arr) => {
    const [val, left, right] = findBiggest(arr);
    const node = new TreeNode(val);
    if (left.length) {
      node.left = subFunc(left);
    }
    if (right.length) {
      node.right = subFunc(right);
    }
    return node;
  };

  const root = subFunc(nums);
  return root;
};

function findBiggest(array) {
  let index = 0;
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      index = i;
    }
  }
  return [max, array.slice(0, index), array.slice(index + 1)];
}
// @lc code=end
