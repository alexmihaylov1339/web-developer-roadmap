// Exercise 2: Event Loop & Macrotasks (setTimeout)
// ------------------------------------------------
// Task:
// 1. Predict the output order before running the code.
// 2. Write the result after running.
// 3. Explain why the timeout doesn't run immediately.

// My prediction:
// 1: start, 3, 5, 4, 2
// After running the code, I confirmed that the output matches the prediction.

console.log("1: start");

setTimeout(() => {
  console.log("2: inside setTimeout with 50ms");
}, 50);

console.log("3: between timeouts");

setTimeout(() => {
  console.log("4: inside setTimeout with 0ms");
}, 0);

console.log("5: end");

// After running:
// Actual result:
// (write the real order after executing)
//
// Why?
// - Synchronous logs run first.
// - setTimeout callbacks go to the macrotask queue.
// - Even a 0ms timeout waits until call stack is empty.
