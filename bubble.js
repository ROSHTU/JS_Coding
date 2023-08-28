function bubble_sort(x) {
  const n = x.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (x[j] > x[j + 1]) {
        [x[j], x[j + 1]] = [x[j + 1], x[j]];
      }
    }
  }

  return x;
}

// TEST CASE
const x = [64, 34, 25, 12, 22, 11, 90];
console.log();
console.log("Original Array");
console.log(x);
const y = bubble_sort(x);
console.log();
console.log("Sorted Array");
console.log(y);


