/**
 * Question
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const n = nums.length;
  const s = new Array(n + 1).fill(0);
  for (let i = 0; i < n; ++i) {
    s[i + 1] = s[i] + nums[i];
  }
  let ans = n + 1;
  const search = (x) => {
    let l = 0;
    let r = n + 1;
    while (l < r) {
      const mid = (l + r) >>> 1;
      if (s[mid] >= x) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    return l;
  };
  for (let i = 0; i <= n; ++i) {
    const j = search(s[i] + target);
    if (j <= n) {
      ans = Math.min(ans, j - i);
    }
  }
  return ans === n + 1 ? 0 : ans;
};
