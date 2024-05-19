/**
 * Question
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const g = new Array(numRows).fill(_).map(() => []);
  let i = 0;
  let k = -1;
  for (const c of s) {
    g[i].push(c);
    if (i === 0 || i === numRows - 1) {
      k = -k;
    }
    i += k;
  }
  return g.flat().join("");
};

// second solution
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;
  const arr = new Array(numRows);
  for (let i = 0; i < numRows; i++) arr[i] = [];
  let mi = 0,
    isDown = true;
  for (const c of s) {
    arr[mi].push(c);

    if (mi >= numRows - 1) isDown = false;
    else if (mi <= 0) isDown = true;

    if (isDown) mi++;
    else mi--;
  }
  let ans = [];
  for (const item of arr) {
    ans = ans.concat(item);
  }
  return ans.join("");
};
