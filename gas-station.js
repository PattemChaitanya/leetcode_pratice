/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;
  let i = n - 1;
  let j = n - 1;
  let s = 0;
  let cnt = 0;
  while (cnt < n) {
    s += gas[j] - cost[j];
    ++cnt;
    j = (j + 1) % n;
    while (s < 0 && cnt < n) {
      --i;
      s += gas[i] - cost[i];
      ++cnt;
    }
  }
  return s < 0 ? -1 : i;
};
