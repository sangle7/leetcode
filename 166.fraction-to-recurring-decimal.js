/*
 * @lc app=leetcode id=166 lang=javascript
 *
 * [166] Fraction to Recurring Decimal
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  const str = (numerator / denominator).toString();
  const [integer, float] = str.split('.');

  if (!float) {
    return integer;
  }
  let i = 1;
  while (i < float.length) {
    const newFloat = float.substr(i) + float.substr(0, i);
    if (newFloat === float) {
      break;
    }
    i++;
  }
  
  const newFloat = i === float.length ? float : '(' + float.substr(0, i) + ')';

  return integer + '.' + newFloat;
};
// @lc code=end
