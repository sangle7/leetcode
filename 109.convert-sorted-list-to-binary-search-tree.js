/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) {
    return null;
  }
  const arr = [];
  let node = head;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  const subFunc = (leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
      return null;
    }
    if (leftIndex === rightIndex) {
      return new TreeNode(arr[leftIndex]);
    }
    const midIndex = Math.floor((rightIndex - leftIndex + 1) / 2 + leftIndex);
    const root = new TreeNode(arr[midIndex]);
    root.left = subFunc(leftIndex, midIndex - 1);
    root.right = subFunc(midIndex + 1, rightIndex);
    // console.error(root)
    return root;
  };

  const treeRootNode = subFunc(0, arr.length - 1);

  return treeRootNode;
};
// @lc code=end
