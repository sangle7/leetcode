/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */

const operatorList = ['+', '-', '*', '/'];

const calculate = (r1, r2, oper) => {
  switch (oper) {
    case '+':
      return r1 + r2;
    case '-':
      return r1 - r2;
    case '*':
      return r1 * r2;
    case '/':
      const r = r1 / r2;
      return Math.trunc(r);
    default:
  }
};

var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (operatorList.indexOf(tokens[i]) > -1) {
      const num1 = stack[stack.length - 2];
      const num2 = stack[stack.length - 1];
      const res = calculate(num1, num2, tokens[i]);
      stack.pop();
      stack.pop();
      stack.push(res);
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  return stack[0];
};
// @lc code=end
