// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

// LINEAR runtime
// function fib(n) {
//     const result = [0, 1]; // Take first two values for base result.

//     for (let i =2; i <= n; i++ ) {
//         const a = result[i - 1];
//         const b = result[i - 2];

//         result.push(a + b);
//     }
//     console.log(result); // [ 0, 1, 1, 2, 3 ] which makes 3 fourth entry
//     return result[n];
// }
// console.log(fib(4));


module.exports = fib;
