/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
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
 */
var BSTIterator = function (root) {
  this.BSTtree = root;
  this.index = -1;
  this.BSTArray = trunToArr(root);
};

function trunToArr(root) {
  if (!root) {
    return [];
  }
  const left = trunToArr(root.left);
  const right = trunToArr(root.right);
  return [...left, root, ...right];
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  this.index++;
  return this.BSTArray[this.index].val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return Boolean(this.BSTArray[this.index + 1]);
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
