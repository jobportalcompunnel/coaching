// function fibonacci(n) {
//   // Initialize the first two Fibonacci numbers
//   let a = 0, b = 1;

//   // Iterate n times to generate the sequence
//   for (let i = 0; i < n; i++) {
//     console.log(a);
//     // Calculate the next Fibonacci number
//     let c = a + b;
//     a = b;
//     b = c;
//   }
// }

// // Example usage:
// fibonacci(10); // Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// // Example usage:
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacci(i)); // Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// }