/**
 * Question
 * You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
The output order does not matter. Returning [9,0] is fine too.
Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
There is no substring of length 16 in s that is equal to the concatenation of any permutation of words.
We return an empty array.
Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.
 

Constraints:

1 <= s.length <= 104
1 <= words.length <= 5000
1 <= words[i].length <= 30
s and words[i] consist of lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const cnt = new Map();
  for (const w of words) {
    cnt.set(w, (cnt.get(w) || 0) + 1);
  }
  const m = s.length;
  const n = words.length;
  const k = words[0].length;
  const ans = [];
  for (let i = 0; i < k; ++i) {
    const cnt1 = new Map();
    let l = i;
    let r = i;
    let t = 0;
    while (r + k <= m) {
      const w = s.slice(r, r + k);
      r += k;
      if (!cnt.has(w)) {
        cnt1.clear();
        l = r;
        t = 0;
        continue;
      }
      cnt1.set(w, (cnt1.get(w) || 0) + 1);
      ++t;
      while (cnt1.get(w) - cnt.get(w) > 0) {
        const remove = s.slice(l, l + k);
        cnt1.set(remove, cnt1.get(remove) - 1);
        l += k;
        --t;
      }
      if (t === n) {
        ans.push(l);
      }
    }
  }
  return ans;
};
