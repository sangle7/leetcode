/*
 * @lc app=leetcode id=652 lang=javascript
 *
 * [652] Find Duplicate Subtrees
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const ans = [];
  if (!root) {
    return ans;
  }

  // 记录所有的路径
  const m = {};
  help(root);

  return ans;

  function help(root) {
    if (!root) {
      return;
    }

    const path = `${root.val},${help(root.left)},${help(root.right)}`;

    m[path] = m[path] || 0;
    if (m[path]++ === 1) {
      ans.push(root);
    }
    return path;
  }
};
// @lc code=end
