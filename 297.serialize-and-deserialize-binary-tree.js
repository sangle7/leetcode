/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  //Breadth-First
  const subFunc = (node) => {
    if (!node) {
      return null;
    }
    let tempObj = {};
    tempObj.val = node.val;
    if (node.left) {
      tempObj.left = subFunc(node.left);
    }
    if (node.right) {
      tempObj.right = subFunc(node.right);
    }
    return tempObj;
  };
  const obj = subFunc(root);
  // console.log(obj);

  return JSON.stringify(obj);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const obj = JSON.parse(data);

  const subFunc = (o) => {
    if (!o) {
      return null;
    }
    let newNode = new TreeNode(o.val);
    if (o.left) {
      newNode.left = subFunc(o.left);
    }
    if (o.right) {
      newNode.right = subFunc(o.right);
    }
    return newNode;
  };

  const root = subFunc(obj);

  // console.log(solutions);
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
