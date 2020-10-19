/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (!n) {
    return [];
  }
  return getTree(1, n);

  function getTree(start, end) {
    var ret = [],
      i,
      j,
      k,
      left,
      right,
      node;
    if (start > end) {
      return [null];
    } else if (start === end) {
      return [new TreeNode(start)];
    }
    for (i = start; i <= end; i++) {
      left = getTree(start, i - 1);
      right = getTree(i + 1, end);
      for (j = 0; j < left.length; j++) {
        for (k = 0; k < right.length; k++) {
          node = new TreeNode(i);
          node.left = left[j];
          node.right = right[k];
          ret.push(node);
        }
      }
    }
    return ret;
  }
};
// @lc code=end
