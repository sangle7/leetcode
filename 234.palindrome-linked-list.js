/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let datas = [];
  while (head !== null) {
    datas.push(head.val);
    head = head.next;
  }
  let length = datas.length;
  for (var i = 0; i < length / 2; ++i) {
    if (datas[i] !== datas[length - i - 1]) {
      return false;
    }
  }
  return true;
};
