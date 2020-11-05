/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  let count = 0;

  if (!root) {
    return count;
  }

  const subFunc = (node, sumArray) => {
    const array = sumArray.map((elem) => {
      let tsum = elem + node.val;
      if (tsum === sum) {
        count++;
      }
      return tsum;
    });
    array.push(0)
    node.left && subFunc(node.left, array);
    node.right && subFunc(node.right, array);
  };

  subFunc(root, [0]);

  return count;
};
// @lc code=end
