/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
var deleteDuplicates = function (head) {
  // 制造一个虚拟0节点，最后删掉它就好
  const realHead = new ListNode(0, head);
  let pointPre = realHead;
  // 空list
  if (!pointPre.next) {
    return head;
  }
  let pointEnd = pointPre.next.next;

  let locked = false;

  while (pointEnd) {
    if (pointPre.next.val === pointEnd.val) {
      pointEnd = pointEnd.next;
      locked = true;
    } else {
      if (locked) {
        pointPre.next = pointEnd;
        pointEnd = pointEnd.next;
        locked = false;
      } else {
        pointPre = pointPre.next;
        pointEnd = pointEnd.next;
      }
    }
  }

  // 结束的时候还在lock状态，就直接指向null
  if (locked) {
    pointPre.next = null
  }

  return realHead.next;
};
// @lc code=end
