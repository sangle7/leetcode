/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) {
    return null;
  }
  const flatList = lists.reduce((pre, node) => {
    while (node) {
      pre.push(node.val);
      node = node.next;
    }
    return pre;
  }, []);

  if (!flatList.length) {
    return null;
  }
  // flatList [1,4,5,1,3,4,2,6]
  const sorted = flatList.sort((a, b) => a - b);

  const res = sorted.map((elem) => new ListNode(elem));
  res.forEach((element, index) => {
    element.next = res[index + 1] || null;
  });

  return res[0];
};
// @lc code=end
