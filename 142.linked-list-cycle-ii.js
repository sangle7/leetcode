/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let node = head;
  if (!node) {
    return null;
  }
  while (node.next) {
    if (node.hasGone) {
      return node
    }
    node.hasGone = 1;
    node = node.next;
  }
  return null
};
// @lc code=end
