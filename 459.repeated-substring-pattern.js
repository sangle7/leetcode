/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(str) {
  var result = false;

  var sameCount = 1;
  for (var i=1; i<str.length; i++) {
      if (str[i] === str[0]) {
          sameCount++;
      }
      else {
          break;
      }
  }

  if (sameCount > 1 && sameCount === str.length) {
      result = true;
  }
  else {
      // Start the search at the 3rd letter (since we already covered cases for 1 and 2 characters above).
      for (var i=2; i<=str.length / 2; i++) {
          // The substring must be a divsor of the string length. This dramatically speeds up the search!
          if (str.length % i === 0) {
              // Get the substring.
              var sub = str.substring(0, i);
              skip = false;
  
              // Check if the substring is found at each nth index in the string (divisor of the length).
              for (var j=sub.length; j<=str.length - sub.length; j+=sub.length) {
                  if (str.indexOf(sub, j) !== j) {
                      // Found the substring, but not at the next divsior index.
                      result = false;
                      skip = true;
                      break;
                  }
              }
  
              // If we got this far, and j reached the end of the string evenly, we have a match!
              if (!skip && j === str.length) {
                  result = true;
                  break;
              }
          }
      }
  }

  return result;
};
// @lc code=end

