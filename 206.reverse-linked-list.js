/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function (head) {
  if (!head) {
    return head;
  }
  let node = head;
  let next = node.next;
  while (next) {
    next.prev = node;
    node = next;
    next = node.next;
  }

  let prev = node.prev;

  const last = node;

  while (prev) {
    node.next = node.prev;
    node = prev;
    prev = node.prev;
  }

  head.next = null;

  return last;
};
// @lc code=end
