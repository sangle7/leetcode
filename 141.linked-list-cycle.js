/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let node = head;
    if(!node){
      return false
    }
    while(node.next){
      if(node.hasGone){
        return true
      }
      node.hasGone = 1;
      node = node.next
    }
    return false
};
// @lc code=end

