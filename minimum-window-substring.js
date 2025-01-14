/**
 * Question
 * Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const need = new Array(128).fill(0);
  const window = new Array(128).fill(0);
  for (const c of t) {
    ++need[c.charCodeAt(0)];
  }
  let cnt = 0;
  let j = 0;
  let k = -1;
  let mi = 1 << 30;
  for (let i = 0; i < s.length; ++i) {
    ++window[s.charCodeAt(i)];
    if (need[s.charCodeAt(i)] >= window[s.charCodeAt(i)]) {
      ++cnt;
    }
    while (cnt === t.length) {
      if (i - j + 1 < mi) {
        mi = i - j + 1;
        k = j;
      }
      if (need[s.charCodeAt(j)] >= window[s.charCodeAt(j)]) {
        --cnt;
      }
      --window[s.charCodeAt(j++)];
    }
  }
  return k < 0 ? "" : s.slice(k, k + mi);
};
