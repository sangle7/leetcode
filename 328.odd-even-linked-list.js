/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let firstOddNode = new ListNode(0);
  let lastOddNode = firstOddNode;
  let firstEvenNode = new ListNode(0);
  let lastEvenNode = firstEvenNode;

  let node = head;

  let isOdd = true;
  while (node) {
    if (isOdd) {
      lastOddNode.next = node;
      lastOddNode = lastOddNode.next;
    } else {
      lastEvenNode.next = node;
      lastEvenNode = lastEvenNode.next;
    }
    isOdd = !isOdd;
    node = node.next;
  }
  lastEvenNode.next = null;
  lastOddNode.next = firstEvenNode.next;
  return firstOddNode.next;
};
// @lc code=end
