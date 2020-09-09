/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (!head.next || m === n) {
    return head;
  }
  let startNode = new ListNode(0, head); //0点

  let rangePrevNode; //区间前一个node 即m-1的处node
  let rangeFistNode; //区间第一个node 即m的处node

  let prevNode = startNode; //遍历点的前一个node
  let node = prevNode.next; //遍历的node

  if (m === 1) {
    rangePrevNode = startNode;
  }

  let index = 1;
  while (node) {
    if (index === m - 1) {
      rangePrevNode = node;
    }
    if (index === m) {
      rangeFistNode = node;
    }
    if (index === n) {
      rangePrevNode.next = node;
      if (!node.next) {
        rangeFistNode.next = null;
      }
    }
    if (index === n + 1) {
      rangeFistNode.next = node;
    }
    if (index >= m && index <= n) {
      let tmp = node;
      node = node.next;
      tmp.next = prevNode;
      prevNode = tmp;
    } else {
      prevNode = prevNode.next;
      node = prevNode.next;
    }
    index++;
  }
  return startNode.next;
};
// @lc code=end
