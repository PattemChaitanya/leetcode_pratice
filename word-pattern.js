/**
 * Question
 * Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const ws = s.split(" ");
  if (pattern.length !== ws.length) {
    return false;
  }
  const d1 = new Map();
  const d2 = new Map();
  for (let i = 0; i < pattern.length; ++i) {
    const a = pattern[i];
    const b = ws[i];
    if (d1.has(a) && d1.get(a) !== b) {
      return false;
    }
    if (d2.has(b) && d2.get(b) !== a) {
      return false;
    }
    d1.set(a, b);
    d2.set(b, a);
  }
  return true;
};
