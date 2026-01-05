class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  setSideLength(sideLength) {
    this.sideLength = sideLength;
  }

  area() {
    return this.sideLength * this.sideLength;
  }
}

function resizeToWidth(rect, newWidth) {
  // Expectation: only width changes, height remains the same
  const oldHeight = rect.height;

  rect.setWidth(newWidth);

  if (rect.height !== oldHeight) {
    throw new Error("LSP broken: height changed when only width was set!");
  }

  return rect.area();
}

console.log(resizeToWidth(new Rectangle(10, 5), 20)); // OK
console.log(resizeToWidth(new Square(10), 20)); // 🔥 should fail
