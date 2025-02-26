/**
 * Question
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const ss = new Set();
  let i = 0;
  let ans = 0;
  for (let j = 0; j < s.length; ++j) {
    while (ss.has(s[j])) {
      ss.delete(s[i++]);
    }
    ss.add(s[j]);
    ans = Math.max(ans, j - i + 1);
  }
  return ans;
};

// second solution
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  const n = s.length;
  const ss = new Array(128).fill(false);
  for (let i = 0, j = 0; i < n; ++i) {
    while (ss[s[i]]) {
      ss[s[j++]] = false;
    }
    ss[s[i]] = true;
    ans = Math.max(ans, i - j + 1);
  }
  return ans;
};
