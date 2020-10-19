/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) {
    return null;
  }
  if (!node.val || !node.neighbors || !node.neighbors.length) {
    return new Node(1);
  }
  const array = [];
  const subFunc = (n) => {
    const valList = n.neighbors.map((node) => node.val);
    array[n.val] = valList;
    for (let i = 0; i < n.neighbors.length; i++) {
      if (!array[n.neighbors[i].val]) {
        subFunc(n.neighbors[i]);
      }
    }
  };

  subFunc(node);

  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      const node = new Node(i, array[i]);
      res.push(node);
    }
  }

  res.forEach((elem) => {
    elem.neighbors = elem.neighbors.map((num) => res[num - 1]);
  });

  return res[0];
};
// @lc code=end
