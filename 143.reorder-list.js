/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let node = head;
  let arr = [];
  while (node) {
    arr.push(node);
    node = node.next;
  }
  // [1,2,3,4,5]
  let i = 0;
  let j = arr.length - 1;
  let count = 0;
  let arr2 = [];
  while (arr2.length < arr.length) {
    if (count % 2) {
      arr2.push(arr[j]);
      j--;
      count--;
    } else {
      arr2.push(arr[i]);
      i++;
      count++;
    }
  }

  arr2.map((node, index) => {
    node.next = arr2[index + 1] || null;
    return node;
  });
};
// @lc code=end
