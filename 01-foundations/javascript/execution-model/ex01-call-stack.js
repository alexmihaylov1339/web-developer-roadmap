// Exercise 1: Call Stack Order
// Predict the order of console log outputs when the following code is executed.
// F, D, B, A, C, E, G
// After running the code, I confirmed that the output matches the prediction.

function third() {
  console.log("A: inside third()");
}

function second() {
  console.log("B: start second()");
  third();
  console.log("C: end second()");
}

function first() {
  console.log("D: start first()");
  second();
  console.log("E: end first()");
}

console.log("F: before first()");
first();
console.log("G: after first()");
