/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null;
  var listA = headA,
    listB = headB;
  while (listA != null && listB != null) {
    if (listA == listB) return listA;
    listA = listA.next;
    listB = listB.next;
    if (listA == listB) return listA;
    if (listA == null) listA = headB;
    if (listB == null) listB = headA;
  }
  return listA;
};
// @lc code=end
