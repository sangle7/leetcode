/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const operators = ['+', '-', '*', '/'];
  const stack = [];
  let operatorTemp = '';
  let tmp = '';
  for (let i = 0; i < s.length; i++) {
    if (operators.indexOf(s[i]) === -1) {
      tmp += s[i];
      if (i === s.length - 1) {
        if (operatorTemp) {
          const num1 = stack.pop();
          stack.push(calculateSimple(num1, parseInt(tmp), operatorTemp));
        } else {
          stack.push(parseInt(tmp));
        }
      }
    } else {
      if (operatorTemp) {
        const num1 = stack.pop();
        stack.push(calculateSimple(num1, parseInt(tmp), operatorTemp));
      } else {
        stack.push(parseInt(tmp));
        operatorTemp = s[i];
      }
      tmp = '';
    }
  }

  console.error(stack)

  return stack[0]
};

function calculateSimple(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return Math.trunc(num1 / num2);
  }
}
// @lc code=end
