/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let i = 0;
  const stack = [];
  while (i < s.length) {
    if (s[i] !== ']') {
      stack.push(s[i]);
    } else {
      let [res, rep, top] = ['', '', ''];
      while (stack.length) {
        top = stack.pop();
        if (top === '[') {
          break;
        } else {
          res = top + res;
        }
      }
      while (stack.length) {
        top = stack.pop();
        if (top >= '0' && top <= '9') {
          rep = top + rep;
        } else {
          stack.push(top);
          break;
        }
      }

      res = res.repeat(Number.parseInt(rep));
      stack.push(res);
    }
    i++;
  }

  res = '';
  while (stack.length) {
    res = stack.pop() + res;
  }
  return res;
};
// @lc code=end
