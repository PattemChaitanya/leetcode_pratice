/**
Question 
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  const left = new Array(n).fill(height[0]);
  const right = new Array(n).fill(height[n - 1]);
  for (let i = 1; i < n; ++i) {
    left[i] = Math.max(left[i - 1], height[i]);
    right[n - i - 1] = Math.max(right[n - i], height[n - i - 1]);
  }
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    ans += Math.min(left[i], right[i]) - height[i];
  }
  return ans;
};
