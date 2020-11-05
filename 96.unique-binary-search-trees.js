/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // [1,2,3,4,5]
  const array = new Array(n).fill(1).map((e, i) => i + 1);

  const trees = [];

  const subFunc = (treeRoot, node, rest) => {
    if (!rest.length) {
      trees.push(treeRoot);
      return;
    }
    node.left = subFunc();
  };

  return;
};
// @lc code=end
