/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.48%)
 * Total Accepted:    258.7K
 * Total Submissions: 655.2K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 *
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 * Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the
 * count-and-say sequence.
 *
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: 1
 * Output: "1"
 *
 *
 * Example 2:
 *
 *
 * Input: 4
 * Output: "1211"
 *
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n < 13) {
    return map[n];
  }
  let key = 13;
  while (key <= n) {
    const newStr = analysizeStr(map[key - 1]);
    map[key] = newStr;
    key++;
  }
  return map[n];
};

function analysizeStr(string) {
  const arr = string.split('');
  const p = arr.reduce(
    (pre, elem, index) => {
      if (pre.pre === elem) {
        pre.count++;
      } else {
        pre.str += `${pre.count}${pre.pre}`;
        pre.count = 1;
      }
      pre.pre = elem;
      return pre;
    },
    {
      str: '',
      count: 0,
      pre: arr[0]
    }
  );
  return p.str + p.count + p.pre;
}

var map = {
  1: '1',
  2: '11',
  3: '21',
  4: '1211',
  5: '111221',
  6: '312211',
  7: '13112221',
  8: '1113213211',
  9: '31131211131221',
  10: '13211311123113112211',
  11: '11131221133112132113212221',
  12: '3113112221232112111312211312113211'
};
