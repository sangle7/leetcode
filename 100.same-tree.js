/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let state = true;

  if (!p && !q) {
    return true;
  }

  const subFunc = (node1, node2) => {
    if ((!node1 && node2) || (node1 && !node2)) {
      state = false;
      return;
    }
    if (node1.val !== node2.val) {
      state = false;
      return;
    }
    if (node1.left || node2.left) {
      subFunc(node1.left, node2.left);
    }
    if (node1.right || node2.right) {
      subFunc(node1.right, node2.right);
    }
  };

  subFunc(p, q);

  return state;
};
// @lc code=end
