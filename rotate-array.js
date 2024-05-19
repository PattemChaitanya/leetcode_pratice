/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const x = nums.length;
  k %= x;
  const reverse = (i, j) => {
    for (; i < j; ++i, --j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  reverse(0, x - 1);
  reverse(0, k - 1);
  reverse(k, x - 1);
};
