/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 var swapPairs = function(head) {
  let node = new ListNode(0) //新建一个节点，用于保存head节点
  node.next = head
  let prev = node
  while(prev.next && prev.next.next) {
      let a = prev.next
      let b = a.next
      prev.next = a.next
      a.next = b.next
      prev = b.next = a
  }
  return node.next
};
// @lc code=end
