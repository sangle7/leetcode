/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let node = head;
  if (!node) {
    return head
  }
  let count = 1;
  while (node.next) {
    node = node.next;
    count++;
  }

  const offset = k % count;

  let pointerFirst = head;
  let pointerLast = head;

  let length = 1;
  while (pointerLast.next) {
    if (length === offset + 1) {
      pointerFirst = pointerFirst.next;
    } else {
      length++;
    }
    pointerLast = pointerLast.next;
  }

  pointerLast.next = head;
  const realHead = pointerFirst.next;
  pointerFirst.next = null;

  return realHead;
};
// @lc code=end
