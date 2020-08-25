/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let node = head

  if(!node){
    return head
  }

  const arr1 = [];
  const arr2 = [];

  while (node) {
    if (node.val < x) {
      arr1.push(node.val);
    } else {
      arr2.push(node.val);
    }
    node = node.next;
  }

  const arr = [...arr1, ...arr2];

  const listNodes = arr.map((ele) => new ListNode(ele, null));

  for (let i = 0; i < listNodes.length; i++) {
    listNodes[i].next = listNodes[i+1] || null
  }

  return listNodes[0];
};
// @lc code=end
