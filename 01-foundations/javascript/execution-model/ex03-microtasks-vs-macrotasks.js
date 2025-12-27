// Exercise 3: Microtasks vs Macrotasks
// -------------------------------------
// Task:
// 1. Predict the output order BEFORE running.
// 2. Run the file.
// 3. Compare your result with prediction.
// 4. Add explanation why promises run before timeout.
//
// My prediction:
// 1, 5, 3, 4, 2

// Output after running:
// 1: start
// 5: end
// 3: first promise then (microtask)
// 4: second promise then (microtask)
// 2: timeout 0ms (macrotask)

console.log("1: start");

setTimeout(() => {
  console.log("2: timeout 0ms (macrotask)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3: first promise then (microtask)");
  })
  .then(() => {
    console.log("4: second promise then (microtask)");
  });

console.log("5: end");
