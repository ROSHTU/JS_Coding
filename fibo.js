function isPerfectSquare(num) {
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

function fibonacciSeries(N) {
    // A number N is a Fibonacci number if and only if one of (5*N^2 + 4) or (5*N^2 - 4) is a perfect square.
    return isPerfectSquare(5 * N * N + 4) || isPerfectSquare(5 * N * N - 4);
}

// Sample input and output
console.log(fibonacciSeries(5)); // Output: true


// var add = function (a, b) {
//     return a+b;
// }

// var subtract = function (a, b) {
//     return a-b;
// }

// var op = function (func) {
//     var x = 2;
//     var y = 3;
//     return func(x, y);
// }
// console.log(op(subtract));



// var add = function(a, b) {
//     return a+b;
// }

// var subtract = function(a, b) {
//     return a-b;
// }

// var op = function (func) {
//     var x = 2;
//     var y = 3;
//     return func(x, y);
// }

// console.log(op(add));