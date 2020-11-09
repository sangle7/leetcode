/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let node = l1;
  let count1 = 1;
  while (node.next) {
    node.next.prev = node;
    node = node.next;
    count1++;
  }
  let lastNodeL1 = node;

  node = l2;
  let count2 = 1;
  while (node.next) {
    node.next.prev = node;
    node = node.next;
    count2++;
  }

  let lastNodeL2 = node;

  if (count2 > count1) {
    [lastNodeL2, lastNodeL1] = [lastNodeL1, lastNodeL2];
    [l1, l2] = [l2, l1];
  }

  let t = 0;
  while (lastNodeL1) {
    let tempSum = lastNodeL1.val + (lastNodeL2 ? lastNodeL2.val : 0) + t;
    if (tempSum >= 10) {
      tempSum -= 10;
      t = 1;
    } else {
      t = 0;
    }
    lastNodeL1.val = tempSum;
    lastNodeL1 = lastNodeL1.prev;
    if (lastNodeL2) {
      lastNodeL2 = lastNodeL2.prev;
    }
  }

  if (t) {
    let newNode = new ListNode(1);
    newNode.next = l1;
    return newNode;
  }

  return l1;
};
// @lc code=end
