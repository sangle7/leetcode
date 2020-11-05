/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  // if t is a subtree of s
  const generateKey = (node) => {
    if (!node) {
      return '';
    }
    return `${node.val},${generateKey(node.left)},${generateKey(node.right)}`;
  };

  const key = generateKey(t);

  console.log(key);

  let state = false;
  help(s);

  function help(root) {
    if (!state) {
      if (!root) {
        return '';
      }

      const path = `${root.val},${help(root.left)},${help(root.right)}`;

      // console.log(path);

      if (path === key) {
        state = true;
      }
      return path
    }
  }
  return state;
};
// @lc code=end
