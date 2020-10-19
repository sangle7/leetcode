/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  var map = new Map();
  var now = null;

  now = head;
  while (now) {
    map.set(now, new Node(now.val));
    now = now.next;
  }

  now = head;
  while (now) {
    map.get(now).next = map.get(now.next) || null;
    map.get(now).random = map.get(now.random) || null;
    now = now.next;
  }

  return map.get(head);
};
// @lc code=end
