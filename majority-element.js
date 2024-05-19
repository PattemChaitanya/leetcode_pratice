/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let currentNumber = 0;
  let max = 0;
  for (const x of nums) {
    if (currentNumber === 0) {
      max = x;
      currentNumber = 1;
    } else {
      currentNumber += max === x ? 1 : -1;
    }
  }
  return max;
};
