/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
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
var findBottomLeftValue = function (root) {
  if (!root) {
    return solutions;
  }
  //Breadth-First
  const subFunc = (array) => {
    let res = [];
    for (let item of array) {
      item.left && res.push(item.left);
      item.right && res.push(item.right);
    }
    if (res.length) {
      return subFunc(res);
    } else {
      return array[0].val;
    }
  };
  return subFunc([root]);
};
// @lc code=end
