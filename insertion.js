function insertion_sort(x) {
  const n = x.length;

  for (let i = 1; i < n; i++) {
    const curr = x[i];
    let j = i - 1;

    while (j >= 0 && x[j] > curr) {
      x[j + 1] = x[j];
      j--;
    }

    x[j + 1] = curr;
  }

  return x;
}
// TEST CASE
const x = [64, 34, 25, 12, 22, 11, 90,56];
console.log();
console.log("Original Array");
console.log(x);
const y = insertion_sort(x);
console.log();
console.log("Sorted Array");
console.log(y);
