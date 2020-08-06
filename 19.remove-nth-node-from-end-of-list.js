/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let firstPointer = head;
  let secondPointer = head;
  let prevNode = null;
  let count = 0;
  while (secondPointer !== null) {
    secondPointer = secondPointer.next;
    if (count >= n) {
      prevNode = firstPointer;
      firstPointer = firstPointer.next;
    }
    count++;
  }
  if (firstPointer === head && secondPointer === head) {
    head = null;
  } else if (firstPointer == head) {
    head = head.next;
  } else {
    prevNode.next = firstPointer.next;
  }
  return head;
};
// @lc code=end
