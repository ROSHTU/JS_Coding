function selection_sort(x) {
  const n = x.length;

  for (let i = 0; i < n - 1; i++) {
    let min_index = i;

    for (let j = i + 1; j < n; j++) {
      if (x[j] < x[min_index]) {
        min_index = j;
      }
    }

    if (min_index !== i) {
      [x[i], x[min_index]] = [x[min_index], x[i]];
    }
  }

  return x;
}

// TEST CASE
const x = [64, 25, 12, 22, 11];
console.log();
console.log("Original Array");
console.log(x);
const y = selection_sort(x);
console.log();
console.log("Sorted Array");
console.log(y);

