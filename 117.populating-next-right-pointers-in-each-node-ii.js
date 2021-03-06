/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function (root) {
  if (!root) {
    return root;
  }
  //Breadth-First
  const subFunc = (array) => {
    if (!array.length) {
      return;
    }
    let res = [];
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      item.next = array[i + 1];
      item.left && res.push(item.left);
      item.right && res.push(item.right);
    }
    subFunc(res);
  };
  subFunc([root]);
  return root;
};
// @lc code=end

