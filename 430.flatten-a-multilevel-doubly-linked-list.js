/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
let flatten = (head) => {
  for (let phead = head; phead; phead = phead.next) {
    if (phead.child) {
      let ctail = phead.child;
      while (ctail.next) {
        ctail = ctail.next;
      }

      if (phead.next) {
        phead.next.prev = ctail;
      }

      phead.child.prev = phead;
      ctail.next = phead.next;
      phead.next = phead.child;

      phead.child = null;
    }
  }

  return head;
};
// @lc code=end
