/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
var insertionSortList = function (head) {
  let node = head;
  if (!node) {
    return head;
  }
  const arr = [];

  while (node) {
    arr.push(node);
    node = node.next;
  }

  const sorted = arr.sort((a, b) => a.val - b.val);

  const final = sorted.map((elem, index) => {
    elem.next = sorted[index + 1] || null;
    return elem;
  });

  return final[0];
};
// @lc code=end
