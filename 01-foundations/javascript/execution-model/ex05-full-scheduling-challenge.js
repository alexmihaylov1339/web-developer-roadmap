// Exercise 5: Full Scheduling Challenge
// -------------------------------------
// Task:
// 1. Predict the exact order of all logs before running.
// 2. Mark which are: sync, microtask (promise/await), macrotask (timeout).
// 3. Run with: node ex05-full-scheduling-challenge.js
// 4. Compare and write what surprised you.
//
// My prediction:
// 1, 5, 7, 4, 6, 8 , 3, 2
// (fill here before running)

console.log("1: start");

setTimeout(() => {
  console.log("2: timeout 0ms");

}, 10);

Promise.resolve().then(() => {
  console.log("4: first promise then");
});

(async function () {
  console.log("5: inside async IIFE before await");

  await null;

  console.log("6: inside async IIFE after await");
})();

console.log("7: end");

setTimeout(() => {
  console.log("8: timeout 10ms");

  Promise.resolve().then(() => {
    console.log("3: promise inside timeout");
  });
}, 0);

// After running:
// Actual result:
// (write the real order here)
//
// Categorize:
// - Sync logs: ...
// - Microtasks (promises/await): ...
// - Macrotasks (timeouts): ...
//
// What surprised me:
// - ...
