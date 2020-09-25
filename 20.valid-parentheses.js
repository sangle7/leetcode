/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var Map = {
  '(':1,
  ')':-1,
  '{':2,
  '}':-2,
  '[':3,
  ']':-3,
}
var isValid = function(s) {
  if(s.length === 0){
      return true
  }
  var count = 0 ;
  var array = []
  for(let i=0;i<s.length;i++){
      const a = Map[s[i]]
      count += a
      if(Math.sign(a) === 1){
          array.push(a) // 3
      }else{
          if(array[array.length-1] + a !== 0){
              return false
          }else{
              array.pop()
          }
      }
      if(count<0){
          return false
      }
  }
  return count === 0
};
// @lc code=end

