/**
 * Question
 * Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const ans = [];
  const vis = new Array(m).fill(0).map(() => new Array(n).fill(false));
  const dirs = [0, 1, 0, -1, 0];
  for (let h = m * n, i = 0, j = 0, k = 0; h > 0; --h) {
    ans.push(matrix[i][j]);
    vis[i][j] = true;
    const x = i + dirs[k];
    const y = j + dirs[k + 1];
    if (x < 0 || x >= m || y < 0 || y >= n || vis[x][y]) {
      k = (k + 1) % 4;
    }
    i += dirs[k];
    j += dirs[k + 1];
  }
  return ans;
};
