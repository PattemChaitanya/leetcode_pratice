/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let l = 0;
  let r = citations.length;
  while (l < r) {
    const mid = (l + r + 1) >> 1;
    let s = 0;
    for (const x of citations) {
      if (x >= mid) {
        ++s;
      }
    }
    if (s >= mid) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return l;
};

// second solution
function hIndex(citations) {
  const n = citations.length;
  const cnt = new Array(n + 1).fill(0);
  for (const x of citations) {
    ++cnt[Math.min(x, n)];
  }
  for (let h = n, s = 0; ; --h) {
    s += cnt[h];
    if (s >= h) {
      return h;
    }
  }
}

// third solution
function hIndex(citations) {
  citations.sort((a, b) => b - a);
  for (let h = citations.length; h; --h) {
    if (citations[h - 1] >= h) {
      return h;
    }
  }
  return 0;
}
