/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
 * @param {number} k
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var generateLinkedList = function (arr) {
  const r = arr.map((elem) => new ListNode(elem));
  r.forEach((element, i) => {
    element.next = r[i + 1];
  });
  return r[0];
};
var print = function (node) {
  const arr = [];
  let temp = node;
  while (temp) {
    console.error(temp.val);
    arr.push(temp.val);
    temp = temp.next;
  }
  console.error(arr);
};
var reverseKGroup = function (head, k) {
  if (k === 1) {
    return head;
  }

  let prevNode = head;
  let node = prevNode.next;
  let startNode = new ListNode(0);
  let lastNode = startNode;

  let i = 1;
  while (prevNode) {
    if (i === k) {
      i = 1;
      // 处理前面的一堆
      lastNode.next = prevNode;
      let thisNode = prevNode;
      while (thisNode.pre) {
        thisNode.next = thisNode.pre;
        thisNode = thisNode.next;
      }
      lastNode = thisNode;
    } else {
      if (i === 1) {
        lastNode.next = prevNode;
      }
      if (node) {
        node.pre = prevNode;
      }
      i++;
    }

    prevNode = node;
    if (prevNode) {
      node = prevNode.next;
    }
  }

  if (i === 1) {
    lastNode.next = null;
  }

  return startNode.next;
};
// @lc code=end
