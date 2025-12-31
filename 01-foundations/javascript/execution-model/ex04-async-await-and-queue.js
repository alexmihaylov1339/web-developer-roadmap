// Exercise 4: Async/Await & Microtask Queue
// -----------------------------------------
// Task:
// 1. Predict the output order BEFORE running.
// 2. Identify which steps are sync, microtasks, macrotasks.
// 3. Run with `node ex04-async-await-and-queue.js`.
// 4. Write the actual result & short explanation.
//
// My prediction:
// 1, 2, 4, 6, 7, 3, 5
// Actual result:
// 1, 2, 4, 6, 7, 5, 3
// (fill here before running)

console.log("1: start");

async function demo() {
  console.log("2: inside async function, before await");

  await Promise.resolve()
  .then(() => {
    console.log("7: promise then inside async function");
  });

  console.log("3: inside async function, after await");
}

demo();

console.log("4: after calling demo()");

Promise.resolve().then(() => {
  console.log("5: promise then outside");
});

console.log("6: end");

// After running:
// Actual result:
// 1: start
// 2: inside async function, before await
// 4: after calling demo()
// 6: end
// 7: promise then inside async function
// 5: promise then outside
// 3: inside async function, after await
//
