function merge_sort(x) {
  if (x.length <= 1) {
    return x;
  }

  const mid = Math.floor(x.length / 2);
  const l = x.slice(0, mid);
  const r = x.slice(mid);

  return merge(merge_sort(l), merge_sort(r));
}

function merge(l, r) {
  let res = [];
  let l_index = 0;
  let r_index = 0;

  while (l_index < l.length && r_index < r.length) {
    if (l[l_index] < r[r_index]) {
      res.push(l[l_index]);
      l_index++;
    } else {
      res.push(r[r_index]);
      r_index++;
    }
  }

  return res.concat(l.slice(l_index)).concat(r.slice(r_index));
}

// TEST CASE

const x = [64, 34, 25, 12, 22, 11, 90];
console.log();
console.log("Original Array");
console.log(x);
const y = merge_sort(x);
console.log();
console.log("Sorted Array");
console.log(y);
