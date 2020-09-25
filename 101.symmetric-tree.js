/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const arr = [];
  const arr2 = [];
  const subFunc1 = (node) => {
    if (!node) {
      arr.push(undefined);
    } else {
      arr.push(node.val);
      subFunc1(node.left);
      subFunc1(node.right);
    }
  };

  const subFunc2 = (node) => {
    if (!node) {
      arr2.push(undefined);
    } else {
      arr2.push(node.val);
      subFunc2(node.right);
      subFunc2(node.left);
    }
  };


  subFunc1(root);
  subFunc2(root);

  console.error(arr);
  console.error(arr2);

  return arr2.join('') === arr.join('');
};
// @lc code=end
