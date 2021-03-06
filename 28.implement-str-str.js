/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (31.22%)
 * Total Accepted:    382.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 * 
 * Example 1:
 * 
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * 
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 * 
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function (haystack, needle) {
    if (needle.length > haystack.length) {
      return -1;
    }
    if(!needle){
      return 0
    }
    let i = 0;
    let j = 0;
    while (i <= haystack.length - needle.length && j < needle.length) {
      if (haystack[i + j] === needle[j]) {
        j++;
        if (j === needle.length) {
          return i;
        }
      } else {
        i++;
        j = 0;
      }
    }
    return -1;
  };

